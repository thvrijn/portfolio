'use client'

import React, { useEffect, useRef } from 'react'
import { Icons, Typography } from 'src/components'
import { motion, useAnimation, useInView } from 'framer-motion'

export function AbouteMe() {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInview) {
			controls.start('visible');
		}
	}, [isInview]);

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	return (
		<section id={'about_me'} className={'flex flex-col lg:flex-row gap-8 py-8'}>
			<img src={'img/portret.jpg'} alt={'portret'}
				 className={'lg:w-[400px] object-cover rounded-3xl'}/>

			<div className={'flex flex-col gap-8'}>
				<div
					className={'sm:col-span-2 flex flex-col gap-4 bg-white bg-opacity-5 p-8 border border-gray-800 rounded-3xl backdrop-blur-3xl'}>
					<Typography variant={'headings-heading-4'}> Over mij</Typography>

					<Typography variant={'text-body'} font={'Fira_Code'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in placerat felis.
						Curabitur elementum diam sed rutrum bibendum. In a purus non enim lobortis ultricies ut
						efficitur lacus. Fusce feugiat rhoncus nunc sed auctor. Fusce eget massa vitae mi
						gravida consequat sit amet vitae erat.
					</Typography>
				</div>

				<div
					className={'sm:col-span-3 lg:col-span-2 flex flex-col gap-4 bg-white bg-opacity-5 p-8 border border-gray-800 rounded-3xl backdrop-blur-3xl'}>
					<Typography variant={'headings-heading-4'}>Skills</Typography>

					<Typography variant={'text-body'} font={'Fira_Code'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in placerat felis.
						Curabitur elementum diam sed rutrum bibendum. In a purus non enim lobortis ultricies ut
						efficitur lacus.
					</Typography>

					<motion.ul
						ref={ref}
						className={'flex flex-wrap gap-4'}
						variants={container}
						initial={'hidden'}
						animate={controls}
					>
						{
							skills.map((skill, index) => {
								return (
									<motion.li
										key={index}
										className={'flex gap-2 xl:gap-4 items-center px-2 py-1 xl:px-4 xl:py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md'}
										variants={item}
									>
										<Icons.Custom name={skill} className={'text-white w-4 xl:w-6'}/>

										<Typography
											variant={'text-body'}
											className={'text-xs xl:text-base text-zinc-200'}
											font={'Fira_Code'}
										>
											{skill}
										</Typography>
									</motion.li>
								)
							})
						}
					</motion.ul>
				</div>
			</div>
		</section>
	)
}

const skills: Icons.CustomIconVariants[] = [
	'Laravel',
	'NextJS',
	'React',
	'MySQL',
	'Tailwind CSS',
	'JavaScript',
	'Typescript',
	'GitHub',
]