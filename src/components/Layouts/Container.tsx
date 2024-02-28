import React, { ReactNode } from 'react'
import {twMerge} from 'tailwind-merge'

type ContainerProps = {
	/** Additional className */
	className?: string
	/** Container contents */
	children?: ReactNode
}

export function Container({ className, children }: ContainerProps) {
	return (
		<div className={twMerge('max-w-screen-xl mx-auto', className)}>
			{children}
		</div>
	)
}