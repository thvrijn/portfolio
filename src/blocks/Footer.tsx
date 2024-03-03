import React from 'react'

import { Icons, Typography } from 'src/components'

export function Footer() {
	return (
		<footer className={'w-full flex flex-col gap-8 items-center bg-gray-950 border-t border-gray-800 py-8'}>
			<div className={'flex gap-8'}>
				<div className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
					<Icons.HeroIcons name={'EnvelopeIcon'} className={'text-white'}/>
				</div>
				<div className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
					<Icons.Custom name={'LinkedIn'} className={'text-white'}/>
				</div>
				<div className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
					<Icons.Custom name={'Instagram'} className={'text-white'}/>
				</div>
				<div className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
					<Icons.Custom name={'GitHub'} className={'text-white'}/>
				</div>
			</div>

			<Typography variant={'text-body'} className={'text-white'}>
				©Copyright. All right reserved.
			</Typography>
		</footer>
	)
}