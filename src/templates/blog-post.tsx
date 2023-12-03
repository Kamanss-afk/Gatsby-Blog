import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '@components/layout';
import { Container } from '@ui/container/container';
import Seo from '@components/seo';
import { Box } from '@ui/box/box';

import type { BlogPost as Post } from 'types/types';

type GraphQlResult = {
	contentfulBlogPost: Post;
}

const BlogPost = ({ data }: PageProps<GraphQlResult>) => {
	const { title, body, image, description } = data.contentfulBlogPost;

	return(
		<Layout>
			<Seo 
				title={title} 
				description={description}
				image={`http:${image.resize.src}`}
			/>
			<Container>
				<Box>
					<article
						itemScope
						itemType='http://schema.org/Article'
					>
						<header>
							<GatsbyImage image={image.gatsbyImageData} alt={title} />
							<h1 itemProp='headline'>{title}</h1>
						</header>

						<section itemProp='articleBody'>
							{renderRichText(body)}
						</section>
					</article>
				</Box>
			</Container>
		</Layout>
	);
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			slug
			title
			description
			body {
				raw
			}
			image {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
				resize(height: 630, width: 1200) {
          src
        }
			}
		}
	}
`;
