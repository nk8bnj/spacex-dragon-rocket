import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Navigation from '@/components/Navigation/Navigation'
import RocketInfo from '@/components/RocketInfo/RocketInfo'
import StarshipSlider from '@/components/StarshipSlider/StarshipSlider'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

import { getRocketById, setIsLoading } from '@/store/rocketsSlice'
import { fetchSlides } from '@/store/starshipSlidesSlice'

import NotFoundPage from '../NotFoundPage/NotFoundPage'

import styles from './RocketPage.module.scss'

const RocketPage = () => {
	const { rocketId } = useParams()

	const dispatch = useAppDispatch()

	const { rocket, isLoading } = useAppSelector(store => store.rockets)
	const { slides } = useAppSelector(store => store.starshipSlides)

	useEffect(() => {
		const fetchData = async () => {
			if (!rocketId) return

			dispatch(setIsLoading(true))

			try {
				dispatch(getRocketById(rocketId))

				dispatch(fetchSlides())
			} catch (error) {
				console.error('Failed to fetch rocket or slides:', error)
			} finally {
				dispatch(setIsLoading(false))
			}
		}

		fetchData()
	}, [dispatch, rocketId])

	if (isLoading) {
		return (
			<div className={styles.rocketContainer}>
				<p>Loading...</p>
			</div>
		)
	}

	if (!rocket) {
		return (
			<div className={styles.rocketContainer}>
				<NotFoundPage />
			</div>
		)
	}

	return (
		<div className={styles.rocket}>
			<div className='container'>
				<Navigation />
				<RocketInfo rocket={rocket} />
			</div>
			<section className={styles.slider}>
				<StarshipSlider slides={slides} />
			</section>
			<section>
				<div className={styles.starbasePhoto}>
					<div className='container'>
						<div>
							<h2 className={styles.starbaseTitle}>Starbase</h2>
							<p className={styles.starbaseDesc}>
								Development and manufacturing of Starship takes place at
								Starbase, one of the world’s first commercial spaceports
								designed for orbital missions.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RocketPage
