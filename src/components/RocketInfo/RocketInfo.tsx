import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

import { getRocketDetails } from '@/store/rocketsSlice'

import { IRocket } from '@/types/Rocket.interface'

import styles from './RocketInfo.module.scss'

interface Props {
	rocket: IRocket
}

const RocketInfo: React.FC<Props> = ({ rocket }) => {
	const dispatch = useAppDispatch()

	const { rocketDetails } = useAppSelector(store => store.rockets)

	useEffect(() => {
		dispatch(getRocketDetails(rocket))
	}, [rocket, dispatch])

	return (
		<div className={styles.rocketInfo}>
			<h2 className={styles.title}>{rocket?.name}</h2>
			<div className={styles.content}>
				<img
					src={rocket?.flickr_images[0]}
					alt={`${rocket?.name} image`}
					className={styles.img}
				/>
				<div className={styles.detailsWrapper}>
					<h3 className={styles.name}>{rocket?.name}</h3>
					<div className={styles.details}>
						{rocketDetails.map(detail => (
							<div key={detail.name} className={styles.detail}>
								<span>{detail.name}</span>
								<span>{detail.value}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RocketInfo
