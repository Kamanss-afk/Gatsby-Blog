import { style } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export const navlink = style({
	color: 'inherit',
	textDecoration: 'none',
	transitionProperty: 'color',
	transitionDuration: '0.2s',
	transitionTimingFunction: 'ease-in-out',
	':hover': {
		color: theme.colors.highlightText,
	},
});