import React from 'react';
import Header from './header';
import 'styles/global.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return(
		<>
			<Header />
			<main>
				{children}
			</main>
			<footer>
        
			</footer>
		</>
	);
};

export default Layout;