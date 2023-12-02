import React from 'react';
import { Link } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';
import { Base } from '../_base';
import * as styles from './navlink.css';

export const NavLink = (props: GatsbyLinkProps<Record<string, unknown>>) => {
	return <Base as={Link} cx={[styles.navlink]} {...props} />;
};