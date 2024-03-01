import React, { ReactNode, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = HTMLProps<HTMLLabelElement> & {
	/** Additional className */
	className?: string
	/** Field contents */
	children?: ReactNode
}

export function Label({ className, children, ...props }: LabelProps) {
	return (
		<label {...props} className={twMerge('text-white font-bold tracking-wide', className)}>
			{children}
		</label>
	)
}