import React, { HTMLAttributes } from 'react';
import { Base } from '../_base';
import * as styles from './box.css';
import { SpaceTypes } from 'styles/theme.css';

interface BoxProps extends HTMLAttributes<HTMLDivElement>{
	paddingY?: SpaceTypes;
}

export const Box = ({ paddingY = 0, ...props }: BoxProps) => {
	return <Base cx={[styles.box, styles.paddingY[paddingY]]} {...props} />;
};