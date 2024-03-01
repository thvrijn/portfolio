import React, { ReactNode, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type FieldProps = HTMLProps<HTMLDivElement> & {
	/** Additional className */
	className?: string
	/** Field contents */
	children?: ReactNode
}

export function Field({ className, children, ...props }: FieldProps) {
	return (
		<div {...props} className={twMerge('flex flex-col gap-2', className)}>
			{children}
		</div>
	)
}