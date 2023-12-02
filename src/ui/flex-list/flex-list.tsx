import React, { HTMLAttributes } from 'react';
import { Flex, FlexProps } from '@ui/flex/flex';
import { BaseProps } from '../_base';
import * as styles from './flex-list.css';

export const FlexList = (props: BaseProps & FlexProps & HTMLAttributes<HTMLUListElement>) => {
	return <Flex as={'ul'} cx={[styles.flexList]} {...props} />;
};