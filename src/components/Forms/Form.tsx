import React, { ReactNode, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type FormsProps = HTMLProps<HTMLFormElement> & {
	/** Additional className */
	className?: string
	/** Form contents */
	children?: ReactNode
}

export function Form({ className, children, ...props }: FormsProps) {
	return (
		<form {...props} className={twMerge('flex flex-col gap-4', className)}>
			{children}
		</form>
	)
}