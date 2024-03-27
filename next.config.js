/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
	async redirects() {
		return [
			{
				source: '/prod.php:path*',
				destination: '/seryjne',
				permanent: false,
			},
			{
				source: '/stud.php:path*',
				destination: '/studialne',
				permanent: false,
			},
			{
				source: '/encyk.php:path*',
				destination: '/encyklopedia',
				permanent: false,
			},
			{
				source: '/about.php3:path*',
				destination: '/about',
				permanent: false,
			},
			{
				source: '/kontakt.php3:path*',
				destination: '/kontakt',
				permanent: false,
			},
			{
				source: 'https://www.auto-era.pl/:path*',
				destination: 'https://auto-era.pl/:path*',
				permanent: false,
			},
		];
	},
};
