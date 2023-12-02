import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@components/layout';

const BlogPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			Blog Page
		</Layout>
	);
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blog Page</title>;
