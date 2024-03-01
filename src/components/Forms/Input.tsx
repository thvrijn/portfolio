import React, { ReactNode, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = HTMLProps<HTMLInputElement> & {
	/** Additional className */
	className?: string
	/** Field contents */
	children?: ReactNode
}

export function Input({ className, children, ...props }: InputProps) {
	return (
		<input {...props} className={twMerge('bg-white bg-opacity-5 p-4 rounded-2xl border border-gray-800 placeholder:text-zinc-600', className)}>
			{children}
		</input>
	)
}