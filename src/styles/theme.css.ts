import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from './colors.css';

export type SpaceTypes = 
  | 0 
  | 1 
  | 2 
  | 3 
  | 4 
  | 5 
  | 6;

export type Space = Record<SpaceTypes, string>;

const space: Space = {
	0: '0px',
	1: '4px',
	2: '8px',
	3: '16px',
	4: '32px',
	5: '64px',
	6: '128px',
};

const fontSize = {
	0: '12px',
	1: '14px',
	2: '16px',
	3: '18px',
	4: '24px',
	5: '32px',
	6: '48px',
	7: '64px',
};

const sizes = {
	container: '1280px',
};

export const theme = createGlobalTheme(':root', {
	space,
	sizes,
	colors,
	fontSize,
});