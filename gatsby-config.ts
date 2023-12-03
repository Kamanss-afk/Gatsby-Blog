import 'dotenv/config';
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'blog',
		siteUrl: 'https://www.yourdomain.tld',
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-vanilla-extract',
		{
			resolve: 'gatsby-alias-imports',
			options: {
				aliases: {
					'@ui': 'src/ui/',
					'@components': 'src/components/',
					'styles': 'src/styles',
				},
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				host: process.env.CONTENTFUL_HOST,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			}
		}
	],
};

export default config;
