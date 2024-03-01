import { Elements, Forms, Layouts, Typography } from 'src/components'

const menuItems = [
	{ label: 'Home', href: '#' },
	{ label: 'Over Mij', href: '#' },
	{ label: 'Contact', href: '#' },
]

const skills = [
	{ label: 'Laravel' },
	{ label: 'NextJS' },
	{ label: 'React' },
	{ label: 'MySQL' },
	{ label: 'Tailwind CSS' },
	{ label: 'JavaScript' },
	{ label: 'Typescript' },
	{ label: 'GitHub' },
]

export default function Home() {
	return (
		<div>
			<div
				className={'z-0 w-[1838px] h-[1838px] absolute -left-[950px] -top-[1200px] bg-gray-50 bg-opacity-10 rounded-full blur-[500px]'}/>
			<div
				className={'z-0 w-[2417px] h-[1653px] absolute -right-[1450px] top-[400px] bg-cyan-400 bg-opacity-10 rounded-full blur-[500px]'}/>


			<Layouts.Container className={'relative z-10 pb-40'}>
				<nav className={'py-4'}>
					<div
						className={'flex justify-between items-center bg-white bg-opacity-5 px-8 py-4 rounded-2xl border border-gray-800 backdrop-blur-3xl'}>
						<Typography variant={'headings-heading-6'} font={'Fira_Code'} className={'font-medium'}>
							Thomas van Rijn
						</Typography>

						<ul className={'flex gap-8'}>
							{
								menuItems.map((item, index) => {
									return (
										<li key={index}>
											<Typography
												variant={'headings-heading-6'}
												font={'Fira_Code'}
												className={'font-medium'}
											>
												{item.label}
											</Typography>
										</li>
									)
								})
							}
						</ul>
					</div>
				</nav>

				<header className={'h-[88vh] flex justify-between items-center'}>
					<div className={'flex flex-col justify-center gap-8'}>
						<Typography variant={'headings-heading-1'} className={'leading-tight'}>
							Hallo, mijn naam is <br/>
							<span
								className={'bg-gradient-to-br from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent'}>
							Thomas
						</span>
						</Typography>

						<Typography variant={'headings-heading-2'} className={'text-3xl font-normal'}>
							Een 21 jarige <span className={'font-semibold'}>full-stack</span> developer
						</Typography>

						<div className={'flex gap-4'}>
							<div className={'w-12 h-12 border-2 border-white rounded-full'}></div>
							<div className={'w-12 h-12 border-2 border-white rounded-full'}></div>
						</div>
					</div>

					<div>
						<img src={'/img/memoji.png'} alt={'memoji'}/>
					</div>
				</header>

				<section className={'flex gap-8'}>
					<img src={'img/portret.jpg'} alt={'portret'}
						 className={'w-[400px] aspect-[3/4] object-cover rounded-3xl'}/>

					<div className={'flex flex-col gap-8'}>
						<div
							className={'flex flex-col gap-4 bg-white bg-opacity-5 p-8 border border-gray-800 rounded-3xl backdrop-blur-3xl'}>
							<Typography variant={'headings-heading-4'}>Over mij</Typography>

							<Typography variant={'text-body'} font={'Fira_Code'}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in placerat felis.
								Curabitur elementum diam sed rutrum bibendum. In a purus non enim lobortis ultricies ut
								efficitur lacus. Fusce feugiat rhoncus nunc sed auctor. Fusce eget massa vitae mi
								gravida consequat sit amet vitae erat.
							</Typography>
						</div>

						<div
							className={'flex flex-col gap-4 bg-white bg-opacity-5 p-8 border border-gray-800 rounded-3xl backdrop-blur-3xl'}>
							<Typography variant={'headings-heading-4'}>Skills</Typography>

							<Typography variant={'text-body'} font={'Fira_Code'}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in placerat felis.
								Curabitur elementum diam sed rutrum bibendum. In a purus non enim lobortis ultricies ut
								efficitur lacus.
							</Typography>

							<div className={'flex flex-wrap gap-4'}>
								{
									skills.map((skill, index) => {
										return (
											<div
												key={index}
												className={'flex gap-4 items-center px-4 py-2 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-md'}
											>
												<Elements.Icons/>

												<Typography
													variant={'text-body'}
													className={'text-zinc-200'}
													font={'Fira_Code'}
												>
													{skill.label}
												</Typography>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</section>

				<section className={'max-w-screen-md mx-auto flex flex-col gap-4 mt-32'}>
					<Typography variant={'headings-heading-2'} className={'text-center'}>
						Contact
					</Typography>

					<Typography variant={'text-body'} className={'text-center'} font={'Fira_Code'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in placerat felis. Curabitur
						elementum diam sed rutrum bibendum. In a purus non enim lobortis ultricies ut efficitur lacus.
					</Typography>

					<Forms.Form>
						<Forms.Field>
							<Forms.Label>Name</Forms.Label>

							<Forms.Input placeholder={'Hoe heet je?'}/>
						</Forms.Field>

						<Forms.Field>
							<Forms.Label>E-mailadres</Forms.Label>

							<Forms.Input placeholder={'Wat is je e-mailadres?'}/>
						</Forms.Field>

						<Forms.Field>
							<Forms.Label>Bericht</Forms.Label>

							<Forms.Textarea placeholder={'Wat wil je mij vertellen?'} rows={4}/>
						</Forms.Field>
					</Forms.Form>
				</section>
			</Layouts.Container>

			<footer className={'w-full flex flex-col gap-8 items-center bg-gray-950 border-t border-gray-800'}>
				<div className={'flex gap-8'}>
						<div className={'w-12 h-12 border-2 border-white rounded-full'}></div>
						<div className={'w-12 h-12 border-2 border-white rounded-full'}></div>
						<div className={'w-12 h-12 border-2 border-white rounded-full'}></div>
						<div className={'w-12 h-12 flex items-center justify-center border-2 border-white rounded-full'}>
							<Elements.Icons name={'GitHub'} className={'text-white'}/>
						</div>
				</div>

				<Typography variant={'text-body'} className={'text-white'}>
					©Copyright. All right reserved.
				</Typography>
			</footer>
		</div>
	)
}
