import Head from 'next/head';
import { Container } from '@mui/material';
import React from 'react';

import { PrismaClient } from '@prisma/client';
import StudioMain from '@/components/StudioMain';
import GoogleTag from '@/components/GoogleTag';

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
	const brands = await prisma.stud.groupBy({
		by: ['marka'],
		orderBy: {
			marka: 'asc',
		},
	});

	const cars = await prisma.stud.findMany({
		where: {
			OK: '1',
		},
		select: {
			marka: true,
			model: true,
			rok: true,
			opis: true,
			picture: true,
		},
		orderBy: [
			{
				marka: 'asc',
			},
			{
				model: 'asc',
			},
		],
	});

	const tempArray = [];

	for (let i = 0; i < brands.length; i++) {
		const obj = {};
		obj['marka'] = brands[i].marka;
		obj['models'] = [];
		for (let j = 0; j < cars.length; j++) {
			if (cars[j].marka === brands[i].marka) {
				obj['models'].push(cars[j]);
			}
		}
		tempArray.push(obj);
	}

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
	result.push(tempArray);
	result.push(prodsTeaserArray);
	result.push(studsTeaserArray);
	result.push(articlesTeaserArray);

	return {
		props: { result },
	};
}

const title = 'Pojazdy studialne i prototypowe';

export default function StudioHome({ result }) {
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
				<StudioMain results={result} title={title} />
			</Container>
		</>
	);
}
