import { useEffect } from 'react'

import AboutUs from '@/components/AboutUs/AboutUs'
import Header from '@/components/Header/Header'
import Rockets from '@/components/Rockets/Rockets'
import StarshipSlider from '@/components/StarshipSlider/StarshipSlider'
import TotalInfo from '@/components/TotalInfo/TotalInfo'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

import { fetchSlides } from '@/store/starshipSlidesSlice'

const HomePage = () => {
	const dispatch = useAppDispatch()
	const { slides } = useAppSelector(store => store.starshipSlides)

	useEffect(() => {
		dispatch(fetchSlides())
	}, [dispatch])

	return (
		<main className='main-page'>
			<div className='container'>
				<Header />
				<Rockets />
				<TotalInfo />
				<AboutUs />
			</div>
			<StarshipSlider slides={slides} />
		</main>
	)
}

export default HomePage
