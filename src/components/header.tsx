import React, { useState } from 'react';
import { Menu, X, Globe } from 'react-feather';
import { ButtonIcon } from '@ui/button-icon/button-icon';
import { Container } from '@ui/container/container';
import { FlexList } from '@ui/flex-list/flex-list';
import { NavLink } from '@ui/navlink/navlink';
import { Flex } from '@ui/flex/flex';

import { 
	desktopHeaderNavWrapper,
	mobileHeaderNavWrapper,
	mobileNavOverlay,
	mobileNavLink,
	mobileNavSVGColor,
} from './header.css';

const navItems = [
	{
		id: 0,
		href: '/',
		text: 'Home',
	},
	{
		id: 1,
		href: '/blog',
		text: 'Blog',
	},
	{
		id: 2,
		href: '/about',
		text: 'About',
	},
	{
		id: 3,
		href: '/contact',
		text: 'Contact',
	},
];

const Header = () => {
	const [isOpen, setOpen] = useState(false);

	return(
		<header>
			<Container className={desktopHeaderNavWrapper}>
				<Flex variant={'spaceBetween'}>
					<Globe />

					<nav>
						<FlexList gap={4}>
							{navItems.map((navItem) => (
								<li key={navItem.id}>
									<NavLink to={navItem.href}>{navItem.text}</NavLink>
								</li>
							))}
						</FlexList>
					</nav>
				</Flex>
			</Container>

			<Container className={mobileHeaderNavWrapper[isOpen ? 'open' : 'closed']}>
				<Flex variant={'spaceBetween'}>
					<Globe />

					<ButtonIcon
						title={'Toggle menu'}
						onClick={() => setOpen((prev) => !prev)}
						className={mobileNavSVGColor[isOpen ? 'reversed' : 'primary']}
					>
						{isOpen ? <X /> : <Menu />}
					</ButtonIcon>
				</Flex>
			</Container>

			{isOpen && (
				<div className={mobileNavOverlay}>
					<nav>
						<FlexList variant={'column'} gap={4}>
							{navItems.map((navItem) => (
								<li key={navItem.id}>
									<NavLink to={navItem.href} className={mobileNavLink}>{navItem.text}</NavLink>
								</li>
							))}
						</FlexList>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;