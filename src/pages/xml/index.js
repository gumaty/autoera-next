import Head from 'next/head';
import { Container } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import React from 'react';
import GoogleTag from '@/components/GoogleTag';
import SiteMapTrades from '@/components/SiteMapTrades';
import SiteMapTypes from '@/components/SiteMapTypes';
import SiteMapGeners from '@/components/SiteMapGeners';
import SiteMapModels from '@/components/SiteMapModels';
import SiteMapStuds from '@/components/SiteMapStuds';
import SiteMapArticles from '@/components/SiteMapArticles';
import SiteMapEncy from '@/components/SiteMapEncy';

const prisma = new PrismaClient();

const title = 'Katalog samochodów seryjnych';

export async function getServerSideProps() {
	const brands = await prisma.marki.findMany({
		where: {
			OK: '1',
		},
		select: {
			marki_ID: true,
			nazwa_marka: true,
		},
		orderBy: {
			nazwa_marka: 'asc',
		},
	});

	const types = await prisma.typy.findMany({
		where: {
			OK: '1',
		},
		select: {
			ID_typy: true,
			nazwa_marka: true,
			nazwa_typ: true,
		},
		orderBy: {
			ID_typy: 'asc',
		},
	});

	const generations = await prisma.generacje.findMany({
		where: {
			OK: '1',
		},
		select: {
			gener_ID: true,
			marka_gener: true,
			typ_gener: true,
			gen_gener: true,
		},
		orderBy: {
			gener_ID: 'asc',
		},
	});

	const modele = await prisma.seryjne.findMany({
		select: {
			model_ID: true,
			marka: true,
			rodzina: true,
			generacja: true,
			model: true,
			typ_nadwozia: true,
			liczba_drzwi: true,
		},
		orderBy: {
			model_ID: 'asc',
		},
	});

	const studs = await prisma.stud.findMany({
		where: {
			OK: '1',
		},
		select: {
			ID: true,
			marka: true,
			model: true,
		},
	});

	const articles = await prisma.articles.findMany({
		select: {
			art_id: true,
			art_title: true,
		},
	});

	const entries = await prisma.encyk.findMany({
		select: {
			tytul: true,
		},
		orderBy: [
			{
				tytul: 'asc',
			},
		],
	});
	let tempArray = [];
	for (let i = 0; i < entries.length; i++) {
		const letter = entries[i].tytul.substring(0, 1).toUpperCase();
		if (
			letter !== 'Ć' &&
			letter !== 'Ł' &&
			letter !== 'Ś' &&
			letter !== 'Ż' &&
			letter !== 'Ź'
		) {
			tempArray.push(letter);
		}
	}

	const letters = [...new Set(tempArray)];

	const result = [];

	result.push(brands);
	result.push(types);
	result.push(generations);
	result.push(modele);
	result.push(studs);
	result.push(articles);
	result.push(letters);

	return {
		props: { result },
	};
}

export default function SerialHome({ result }) {
	return (
		<>
			<Head>
				<title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny</title>
				<meta
					name='description'
					content='Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<GoogleTag />
			<Container maxWidth='xl' sx={{ bgcolor: '#FFFECC', color: '#153F1A' }}>
				<xml version='1.0' encoding='UTF-8' />
				<urlset xmlns='http://www.google.com/schemas/sitemap/0.9'>
					<url>
						<loc>https://www.auto-era.pl/</loc>
						<changefreq>daily</changefreq>
						<priority>0.8</priority>
					</url>
					<SiteMapTrades results={result} />
					<SiteMapTypes results={result} />
					<SiteMapGeners results={result} />
					<SiteMapModels results={result} />
					<SiteMapStuds results={result} />
					<SiteMapArticles results={result} />
					<SiteMapEncy results={result} />
				</urlset>
			</Container>
		</>
	);
}
