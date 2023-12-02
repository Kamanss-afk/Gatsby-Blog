import { style, styleVariants } from '@vanilla-extract/css';
import { device } from 'styles/break-points';
import { theme } from 'styles/theme.css';

export const desktopHeaderNavWrapper = style({
	display: 'none',
	'@media': {
		[device.sm]: {
			display: 'block',
			paddingTop: theme.space[4],
		},
	},
});

export const mobileHeaderNavWrapperBase = style({
	display: 'block',
	paddingTop: theme.space[3],
	fontSize: theme.fontSize[3],
	'@media': {
		[device.sm]: {
			display: 'none',
		},
	},
});

export const mobileHeaderNavWrapper = styleVariants({
	open: [
		mobileHeaderNavWrapperBase,
		{
			color: theme.colors.primaryText,
			background: theme.colors.primary,
		},
	],
	closed: [
		mobileHeaderNavWrapperBase,
	],
});

export const mobileNavSVGColor = styleVariants({
	primary: [
		{
			color: theme.colors.text,
		},
	],
	reversed: [
		{
			color: theme.colors.primaryText,
		},
	],
});

export const mobileNavOverlay = style({
	position: 'absolute',
	width: '100vw',
	height: '100vh',
	zIndex: 1,
	background: theme.colors.primary,
	paddingTop: theme.space[4],
	'@media': {
		[device.sm]: {
			display: 'none',
		},
	},
});

export const mobileNavLink = style({
	color: theme.colors.primaryText,
	paddingTop: theme.space[2],
	paddingBottom: theme.space[2],
	paddingLeft: theme.space[4],
	paddingRight: theme.space[4],
	fontSize: theme.fontSize[4],
});