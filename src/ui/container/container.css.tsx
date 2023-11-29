import { style } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export const container = style({
	marginLeft: 'auto',
	marginRight: 'auto',
	paddingLeft: theme.space[4],
	paddingRight: theme.space[4],
	maxWidth: theme.sizes.container,
});