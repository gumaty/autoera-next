import GoogleTag from '@/components/GoogleTag';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='pl'>
			<Head />
			<GoogleTag />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
