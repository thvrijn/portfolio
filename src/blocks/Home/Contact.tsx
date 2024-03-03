import React from 'react'
import { Forms, Typography } from 'src/components'

export function Contact() {
	return (
		<section id={'contact'} className={'max-w-screen-md mx-auto flex flex-col gap-4 mt-32'}>
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
	)
}