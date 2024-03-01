import React, { ReactNode, HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
	/** Additional className */
	className?: string
	/** Field contents */
	children?: ReactNode
}

export function Textarea({ className, children, ...props }: TextareaProps) {
	return (
		<textarea {...props} className={twMerge('bg-white bg-opacity-5 p-4 rounded-2xl border border-gray-800 placeholder:text-zinc-600', className)}>
			{children}
		</textarea>
	)
}