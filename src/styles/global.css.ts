import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

globalStyle('body', {
	margin: 0,
	color: theme.colors.text,
});

globalStyle('*', {
	boxSizing: 'border-box',
});