import React from 'react'
import { Icons, Typography } from 'src/components'

export function Navigation() {
	return (
		<nav className={'py-4'}>
			<div
				className={'flex justify-between items-center bg-white bg-opacity-5 px-8 py-4 rounded-2xl border border-gray-800 backdrop-blur-3xl'}>
				<Typography variant={'headings-heading-6'} font={'Fira_Code'} className={'font-medium'}>
					Thomas van Rijn
				</Typography>

				<ul className={'hidden sm:flex gap-8'}>
					{
						menuItems.map((item, index) => {
							return (
								<li key={index}>
									<a href={item.href}>
										<Typography
											variant={'headings-heading-6'}
											font={'Fira_Code'}
											className={'font-normal'}
										>
											{item.label}
										</Typography>
									</a>
								</li>
							)
						})
					}
				</ul>

				<button className={'sm:hidden'}>
					<Icons.HeroIcons name={'Bars3BottomRightIcon'} className={'w-8'}/>
				</button>
			</div>
		</nav>
	)
}

const menuItems = [
	{ label: 'Home', href: '#' },
	{ label: 'Over Mij', href: '#about_me' },
	{ label: 'Contact', href: '#contact' },
]