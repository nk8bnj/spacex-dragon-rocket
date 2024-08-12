import styles from './AboutUs.module.scss'

const AboutUs = () => {
	return (
		<section className={styles.aboutUs}>
			<h2 className={styles.title}>About us</h2>
			<div className={styles.video}>
				<img
					className={styles.img}
					src='../../../public/images/videoPreview.jpg'
					alt='Video preview image'
				/>
				<div className={styles.button}>
					<img src='../../../public/images/play.png' alt='Play Icon' />
				</div>
			</div>
		</section>
	)
}

export default AboutUs
