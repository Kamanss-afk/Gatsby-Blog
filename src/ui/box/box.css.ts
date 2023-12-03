import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export const box = style({
	width: '100%',
});

export const paddingY = styleVariants(theme.space, (padding) => ({
	paddingTop: padding,
	paddingBottom: padding,
}));