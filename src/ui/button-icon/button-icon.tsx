import React, { HTMLAttributes } from 'react';
import { Base } from '../_base';
import * as styles from './button-icon.css';

export const ButtonIcon = (props: HTMLAttributes<HTMLButtonElement>) => {
	return <Base as={'button'} cx={[styles.buttonIcon]} {...props} />;
};