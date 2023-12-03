import path from 'path';
import type { GatsbyNode } from 'gatsby';

interface Result {
  allContentfulBlogPost: {
    nodes: Array<{ slug: string }>;
  };
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
  
	const result = await graphql<Result>(`
    query BlogIndexQuery {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

	if(result.errors) {
		reporter.panicOnBuild(
			'There was an error loading your Contentful posts',
			result.errors
		);
	}

	const posts = result.data?.allContentfulBlogPost.nodes || [];

	if(posts.length > 0) {
		posts.forEach((post) => {
			createPage({
				path: `/blog/${post.slug}/`,
				component: path.resolve('./src/templates/blog-post.tsx'),
				context: {
					slug: post.slug,
				},
			});
		});
	}
};