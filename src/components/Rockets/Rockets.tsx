import { useEffect } from 'react'

import RocketCardsSlider from '@/components/RocketCardsSlider/RocketCardsSlider'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

import { fetchRockets } from '@/store/rocketsSlice'

import styles from './Rockets.module.scss'

const Rockets = () => {
	const dispatch = useAppDispatch()
	const rockets = useAppSelector(store => store.rockets.rockets)

	useEffect(() => {
		dispatch(fetchRockets())
	}, [dispatch])

	return (
		<section className={styles.rockets}>
			<h2 className={styles.title}>Our rockets</h2>
			<RocketCardsSlider rockets={rockets} />
		</section>
	)
}

export default Rockets
