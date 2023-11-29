import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export type FlexVariants = 
	| 'spaceBetween'
	| 'column';

export const flexGap = styleVariants(theme.space, (gap) => ({ gap }));

export const flex = style({
	display: 'flex',
	alignItems: 'center',
});

export const flexVariants: Record<FlexVariants, string> = styleVariants({
	spaceBetween: {
		width: '100%',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},
	column: {
		flexDirection: 'column',
	},
});