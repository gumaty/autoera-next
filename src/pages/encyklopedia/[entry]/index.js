import Head from 'next/head';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { PrismaClient } from '@prisma/client';
import EncyLetterMain from '@/components/EncyLetterMain';
import GoogleTag from '@/components/GoogleTag';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
	const sign = context.params.entry;

	const letter = await prisma.encyk.findMany({
		where: {
			tytul: {
				startsWith: sign,
			},
			OK: '1',
		},
		select: {
			id: true,
			tytul: true,
			tresc: true,
			image: true,
		},
		orderBy: [
			{
				tytul: 'asc',
			},
		],
	});

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
	result.push(letter);
	result.push(prodsTeaserArray);
	result.push(studsTeaserArray);
	result.push(articlesTeaserArray);

	return {
		props: { result },
	};
}

export default function encyItemHome({ result }) {
	const [loadedBrands, setLoadedBrands] = useState(result);

	const router = useRouter();

	const { entry } = router.query;

	const { tytul, tresc, image } = loadedBrands[0][0];

	const title = `Hasła encyklopedii - litera ${entry}`;

	return (
		<>
			<Head>
				<title>
					AUTO-ERA - Twój profesjonalny portal motoryzacyjny - {title}
				</title>
				<meta
					name='description'
					content='Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<GoogleTag />
			<Container maxWidth='xl' sx={{ bgcolor: '#FFFECC', color: '#153F1A' }}>
				<EncyLetterMain results={result} />
			</Container>
		</>
	);
}
