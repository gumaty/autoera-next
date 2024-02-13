import Head from 'next/head';
import { Container } from '@mui/material';
import { PrismaClient } from '@prisma/client';
import React from 'react';
import HomeMain from '@/components/HomeMain';
import GoogleTag from '@/components/GoogleTag';

const prisma = new PrismaClient();

export async function getServerSideProps() {
	const prods = await prisma.updatesy.findMany({
		where: {
			update_strona: 'prod',
		},
		select: {
			update_ID: true,
			update_tresc: true,
			update_image: true,
			update_link: true,
			update_data: true,
			update_strona: true,
		},
		orderBy: {
			update_data: 'desc',
		},
		take: 3,
	});

	const studs = await prisma.updatesy.findMany({
		where: {
			update_strona: 'stud',
		},
		select: {
			update_ID: true,
			update_tresc: true,
			update_image: true,
			update_link: true,
			update_data: true,
			update_strona: true,
		},
		orderBy: {
			update_data: 'desc',
		},
		take: 3,
	});

	const articles = await prisma.updatesy.findMany({
		where: {
			update_strona: 'article',
		},
		select: {
			update_ID: true,
			update_tresc: true,
			update_image: true,
			update_link: true,
			update_data: true,
			update_strona: true,
		},
		orderBy: {
			update_data: 'desc',
		},
		take: 3,
	});

	const encyk = await prisma.updatesy.findMany({
		where: {
			update_strona: 'ency',
		},
		select: {
			update_ID: true,
			update_tresc: true,
			update_image: true,
			update_link: true,
			update_data: true,
			update_strona: true,
		},
		orderBy: {
			update_data: 'desc',
		},
		take: 3,
	});

	const prodsArray = prods.map((item) => {
		let date = new Date(item.update_data);
		item.update_data = date.toLocaleDateString('pl-PL');
		return item;
	});

	const studsArray = studs.map((item) => {
		let date = new Date(item.update_data);
		item.update_data = date.toLocaleDateString('pl-PL');
		return item;
	});

	const articlesArray = articles.map((item) => {
		let date = new Date(item.update_data);
		item.update_data = date.toLocaleDateString('pl-PL');
		return item;
	});

	const encyArray = encyk.map((item) => {
		let date = new Date(item.update_data);
		item.update_data = date.toLocaleDateString('pl-PL');
		return item;
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

	result.push(prodsArray);
	result.push(studsArray);
	result.push(prodsTeaserArray);
	result.push(studsTeaserArray);
	result.push(articlesTeaserArray);
	result.push(articlesArray);
	result.push(encyArray);

	return {
		props: { result },
	};
}
export default function Home({ result }) {
	return (
		<>
			<Head>
				<title>AUTO-ERA - Twój profesjonalny portal motoryzacyjny</title>
				<meta
					name='description'
					content='Portal AUTO-ERA to motoryzacyjny serwis, zawierający najważniejsze wiadomości z dziedziny motoryzacji, katalog samochodów produkcyjnych, katalog samochodów studialnych oraz encyklopedię pojęć motoryzacyjnych bogato ilustrowane zdjęciami.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='google-site-verification'
					content='81Fq-2lqnqWjUI3nLq134hfTxbD2yS1p1ZdaiC2j6H0'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<GoogleTag />
			<Container maxWidth='xl' sx={{ bgcolor: '#FFFECC', color: '#153F1A' }}>
				<HomeMain results={result} />
			</Container>
		</>
	);
}
