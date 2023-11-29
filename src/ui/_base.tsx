import React from 'react';

// Functiion to concatenate class names
export const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ');

export interface BaseProps {
  as?: React.ElementType;
  cx?: (string | undefined)[];
  className?: string;
}

export const Base = ({
	as: Component = 'div',
	cx: _cx = [],
	className,
	...props
}: BaseProps) => {
	return <Component className={cx(..._cx, className)} {...props} />;
};