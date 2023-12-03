import * as React from 'react';
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby';
import Layout from '@components/layout';
import { FlexList } from '@ui/flex-list/flex-list';
import { Container } from '@ui/container/container';
import Seo from '@components/seo';
import { Box } from '@ui/box/box';

import type { BlogPost } from 'types/types';

type DataType = {
	allContentfulBlogPost: {
		nodes: BlogPost[];
	}
}

const BlogPage = (props: PageProps<DataType>) => {
	const posts = props.data.allContentfulBlogPost.nodes;

	return (
		<Layout>
			<Container>
				<Box>
					<FlexList>
						{posts.map(item => (
							<li key={item.slug}>
								<article 
									itemScope 
									itemType='http://schema.org/Article'
								>
									<header>
										<Link to={`/blog/${item.slug}`} itemProp='url'>
											<h2>{item.title}</h2>
										</Link>
									</header>
									<section>
										<p itemProp='description'>
											{item.description}
										</p>
									</section>
								</article>
							</li>
						))}
					</FlexList>
				</Box>
			</Container>
		</Layout>
	);
};

export default BlogPage;

export const Head: HeadFC = () => <Seo title={'Blog Page'} />;

export const pageQuery = graphql`
	query PostListQuery {
		allContentfulBlogPost {
			nodes {
				id
				slug
				title
				description
				body {
					raw
				}
			}
		}
	}
`;
