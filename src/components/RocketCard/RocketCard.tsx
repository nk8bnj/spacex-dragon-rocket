import { Link } from 'react-router-dom'

import preparedRocketInfo from '@/utils/preparedRocketInfo'

import { IRocket } from '@/types/Rocket.interface'
import { IRocketInfo } from '@/types/RocketInfo.interface'

import styles from './RocketCard.module.scss'

interface Props {
	rocket: IRocket
}

const RocketCard: React.FC<Props> = ({ rocket }) => {
	const rocketDetails: IRocketInfo[] = preparedRocketInfo(rocket)

	return (
		<div className={styles.rocketCard}>
			<Link to={`rockets/${rocket.id}`}>
				<img
					className={styles.image}
					src={rocket.flickr_images[0]}
					alt='Rocket'
				/>
			</Link>
			<div className={styles.info}>
				<Link to={`rockets/${rocket.id}`}>
					<p className={styles.rocketName}>{rocket.name}</p>
				</Link>

				<ul className={styles.rocketDetails}>
					{rocketDetails.slice(0, 6).map((rocketProp: IRocketInfo) => (
						<li key={rocketProp.name} className={styles.item}>
							<span>{rocketProp.name}</span>
							<span>{rocketProp.value}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default RocketCard
