import React from 'react'
import { Icons, Typography } from 'src/components'


export function Header() {
	return (
		<header className={'h-[calc(100vh-160px)] flex justify-center sm:justify-between items-center'}>
			<div className={'flex flex-col justify-center gap-8'}>
				<Typography variant={'headings-heading-1'} className={'leading-tight'}>
					Hallo, <br className={'md:hidden'}/> mijn naam is <br/>
					<span
						className={'bg-gradient-to-br from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent'}>Thomas</span>
				</Typography>

				<Typography variant={'headings-heading-3'} className={'font-normal'}>
					Een 21 jarige <span className={'font-semibold'}>full-stack</span> developer
				</Typography>

				<div className={'flex gap-4'}>
					<div
						className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
						<Icons.HeroIcons name={'EnvelopeIcon'}/>
					</div>
					<div
						className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
						<Icons.Custom name={'GitHub'} className={'text-white'}/>
					</div>
				</div>
			</div>

			<div className={'hidden sm:block'}>
				<img src={'/img/memoji.png'} alt={'memoji'}/>
			</div>
		</header>
	)
}