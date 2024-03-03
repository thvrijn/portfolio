'use client'

import React from 'react'
import * as Solid from '@heroicons/react/24/solid'
import * as Outline from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'


const repositories = {
	solid: Solid,
	outline: Outline,
}

type HeroIconsProps = {
	/** Additional CSS class name for styling. */
	className?: string
	/** Type of repository, either 'solid' or 'outline' */
	repository?: 'solid' | 'outline'
	/** The name of the icon */
	name: string
}

export function HeroIcons({ className, name, repository = 'solid' }: HeroIconsProps) {
	// @ts-ignore
	const Component = repositories[repository][name]

	return (
		<Component className={twMerge('w-5 text-white', className)}/>
	)
}