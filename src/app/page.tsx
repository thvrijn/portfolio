import React from 'react'
import { Layouts } from 'src/components'
import * as Blocks from 'src/blocks'

export default function Home() {
	return (
		<div>
			<Layouts.Container className={'relative z-10 pb-40'}>
				<Blocks.Navigation/>

				<Blocks.Home.Header/>

				<Blocks.Home.AbouteMe/>

				<Blocks.Home.Contact/>
			</Layouts.Container>

			<Blocks.Footer/>
		</div>
	)
}
