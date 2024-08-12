import styles from './TotalInfo.module.scss'

const TotalInfo = () => {
	return (
		<section className={styles.totalInfo}>
			<div className={styles.content}>
				<span className={styles.amount}>43</span>
				<span className={styles.title}>Total launches</span>
			</div>
			<div className={styles.content}>
				<span className={styles.amount}>46</span>
				<span className={styles.title}>Visits to the ISS</span>
			</div>
			<div className={styles.content}>
				<span className={styles.amount}>25</span>
				<span className={styles.title}>Total reflights</span>
			</div>
		</section>
	)
}

export default TotalInfo
