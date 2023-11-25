import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main>
			<h1>Page not found</h1>
			<p>
        Sorry 😔, we couldn’t find what you were looking for.
			</p>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
