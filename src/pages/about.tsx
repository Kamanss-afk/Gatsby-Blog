import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '@components/layout';

const AboutPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			About Page
		</Layout>
	);
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
