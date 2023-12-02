import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'blog',
		siteUrl: 'https://www.yourdomain.tld',
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-vanilla-extract',
		{
			resolve: 'gatsby-alias-imports',
			options: {
				aliases: {
					'@ui': 'src/ui/',
					'@components': 'src/components/',
					'styles': 'src/styles',
				}
			}
		}
	],
};

export default config;
