import Head from 'next/head';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import ModelMain from '@/components/ModelMain';
import GoogleTag from '@/components/GoogleTag';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
	const marka = context.params.marki;
	const rodzina = context.params.rodziny;
	let generacja = context.params.generacje;
	const nadwozie = context.params.nadwozie;
	const drzwi = parseInt(context.params.drzwi);
	const model = context.params.model;

	const type = await prisma.typy.findMany({
		where: {
			nazwa_marka: marka,
			nazwa_typ: rodzina,
		},
	});

	if (type.length > 0 && type[0].generacja_typ === '0') generacja = '';

	let resultQuery = {
		where: {
			marka: marka,
			rodzina: rodzina,
			generacja: generacja,
			typ_nadwozia: nadwozie,
			liczba_drzwi: drzwi,
			model: model,
		},
		select: {
			model_ID: true,
			marka: true,
			rodzina: true,
			generacja: true,
			model: true,
			typ_nadwozia: true,
			liczba_drzwi: true,
			liczba_miejsc: true,
			rok_uruch: true,
			rok_zakoncz: true,
			kraj_producenta: true,
			struktura_nosna: true,
			cykl_pracy_silnika: true,
			rodzaj_zaplonu: true,
			liczba_cylindow: true,
			uklad_cylindrow: true,
			pojemnosc_skokowa: true,
			moc_maks: true,
			obr_mocy_maks: true,
			moment_maks: true,
			obr_momentu_maks: true,
			rodzaj_zasilania: true,
			katalizator: true,
			doladowanie: true,
			uklad_napedowy: true,
			rodzaj_skrzyni: true,
			liczba_biegow: true,
			hamulce_przed: true,
			hamulce_tyl: true,
			ogumienie_przed: true,
			ogumienie_tyl: true,
			rozstaw_osi: true,
			dlugosc_calk: true,
			szerokosc_calk: true,
			wysokosc_calk: true,
			masa_wl: true,
			predkosc_maks: true,
			czas_rozp_0_100: true,
			zuzycie_sr: true,
			zuzycie_paliwa_wg: true,
			poj_zbior_pal: true,
			rodz_naped: true,
			napiecie: true,
			typ_akumul: true,
			moc_system: true,
			moc_sil_1: true,
			moc_sil_2: true,
			moc_sil_3: true,
			poj_akumul: true,
			zasieg_elekt: true,
		},
	};

	const galeriaQuery = {
		where: {
			marka: marka,
			typ: rodzina,
			generacja: generacja,
		},
		orderBy: {
			image_name: 'asc',
		},
	};

	if (generacja === '') {
		delete resultQuery.where.generacja;
		delete galeriaQuery.where.generacja;
	}

	const modelSelected = await prisma.seryjne.findMany(resultQuery);
	const galeria = await prisma.gallery.findMany(galeriaQuery);

	const prodsTeaser = await prisma.typy.findMany({
		where: {
			OK: '1',
		},
		select: {
			ID_typy: true,
			nazwa_marka: true,
			nazwa_typ: true,
			typ_lata: true,
			img_typ: true,
		},
	});

	const prodsTeaserArray = [];

	for (let i = 0; i < 2; i++) {
		const number = Math.round(Math.random() * prodsTeaser.length);
		prodsTeaserArray.push(prodsTeaser[number]);
	}

	const studsTeaser = await prisma.stud.findMany({
		where: {
			OK: '1',
		},
		select: {
			ID: true,
			marka: true,
			model: true,
			rok: true,
			picture: true,
		},
	});

	const studsTeaserArray = [];

	for (let i = 0; i < 2; i++) {
		const number = Math.round(Math.random() * studsTeaser.length);
		studsTeaserArray.push(studsTeaser[number]);
	}

	const articlesTeaser = await prisma.articles.findMany({
		select: {
			art_id: true,
			art_title: true,
			art_picture: true,
			art_author: true,
			art_date: true,
		},
	});

	const articlesTempArray = [];

	for (let i = 0; i < 2; i++) {
		const number = Math.round(Math.random() * articlesTeaser.length);
		articlesTempArray.push(articlesTeaser[number]);
	}

	const articlesTeaserArray = articlesTempArray.map((item) => {
		let date = new Date(item.art_date);
		item.art_date = date.toLocaleDateString('pl-PL');
		return item;
	});

	const result = [];
	result.push(modelSelected);
	result.push(galeria);
	result.push(type);
	result.push(prodsTeaserArray);
	result.push(studsTeaserArray);
	result.push(articlesTeaserArray);

	return {
		props: { result },
	};
}

export default function ModelHome({ result }) {
	const router = useRouter();

	const [loadedBrands, setLoadedBrands] = useState(result);

	const { marki, rodziny, generacje } = router.query;

	const {
		marka,
		rodzina,
		generacja,
		model,
		typ_nadwozia,
		liczba_drzwi,
		rok_uruch,
		rok_zakoncz,
	} = loadedBrands[0][0];

	const title = `AUTO-ERA - Twój profesjonalny portal motoryzacyjny - Katalog samochodów seryjnych - ${marka} ${rodzina} ${generacja} ${model} ${typ_nadwozia} ${liczba_drzwi}-drzwiowy (${rok_uruch}-${rok_zakoncz})`;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name='description'
					content='Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<GoogleTag />
			<Container maxWidth='xl' sx={{ bgcolor: '#FFFECC', color: '#153F1A' }}>
				<ModelMain results={result} />
			</Container>
		</>
	);
}
