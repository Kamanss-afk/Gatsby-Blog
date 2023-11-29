import React, { HTMLAttributes } from 'react';
import { Base } from '../_base';
import * as styles from './container.css';

export const Container = (props: HTMLAttributes<HTMLDivElement>) => {
	return <Base cx={[styles.container]} {...props} />;
};