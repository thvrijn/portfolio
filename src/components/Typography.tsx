import React, { ComponentProps, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const firaCode = Fira_Code({ subsets: ['latin'] })
const fonts = {
	Inter: inter,
	Fira_Code: firaCode,
}

export const typographyVariants = [
	'headings-heading-1',
	'headings-heading-2',
	'headings-heading-3',
	'headings-heading-4',
	'headings-heading-5',
	'headings-heading-6',
	'text-body',
] as const

export type TypographyVariant = (typeof typographyVariants)[number]

export const elementTags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
	'headings-heading-1': 'h1',
	'headings-heading-2': 'h2',
	'headings-heading-3': 'h3',
	'headings-heading-4': 'h4',
	'headings-heading-5': 'h5',
	'headings-heading-6': 'h6',
	'text-body': 'p',
} as const

export type TypographyProps<E extends ElementType> = {
	/** The HTML element tag to be used */
	as?: E
	/** The grid items */
	children: ReactNode
	/** Additional classes to be set on the grid */
	className?: ComponentProps<'div'>['className']
	/** The variant to be displayed */
	variant: TypographyVariant
	font?: 'Inter' | 'Fira_Code'
} & ComponentPropsWithoutRef<E>

const getTypographyVariant = (variant: TypographyVariant) =>
	({
		'headings-heading-1': 'text-white text-4xl lg:text-5xl xl:text-[64px] font-bold tracking-wide',
		'headings-heading-2': 'text-white text-4xl font-bold tracking-wide',
		'headings-heading-3': 'text-white text-2xl xl:text-3xl font-bold tracking-wide',
		'headings-heading-4': 'text-white text-2xl font-bold tracking-wide text-zinc-300',
		'headings-heading-5': 'text-white text-xl font-bold tracking-wide',
		'headings-heading-6': 'text-white text-lg font-bold tracking-wide',
		'text-body': 'text-white text-zinc-400',
	}[variant])

export const Typography = <E extends React.ElementType>({
	as,
	children,
	className,
	variant,
	font = 'Inter',
	...props
}: TypographyProps<E>) => {
	const Element = as || elementTags[variant]

	return (
		<Element className={`${fonts[font].className} ${twMerge(getTypographyVariant(variant), className)}`} {...props}>
			{children}
		</Element>
	)
}
