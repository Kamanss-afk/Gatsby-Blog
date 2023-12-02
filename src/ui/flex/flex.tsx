import React, { HTMLAttributes } from 'react';
import { SpaceTypes } from '../../styles/theme.css';
import { Base } from '../_base';
import { FlexVariants } from './flex.css';
import * as styles from './flex.css';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: SpaceTypes;
  variant?: FlexVariants,
  cx?: (string | undefined)[];
}

export const Flex = ({ variant, gap = 3, cx: _cx = [], ...props }: FlexProps) => {
	return <Base cx={[styles.flex, styles.flexGap[gap], variant && styles.flexVariants[variant], ..._cx]} {...props} />;
};