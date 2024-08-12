import Navigation from '@/components/Navigation/Navigation'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<section className={styles.header}>
			<Navigation />
			<div className={styles.content}>
				<h1 className={styles.title}>Dive deep in to the future</h1>
				<div className={styles.icons}>
					<img src='../../../public/images/earth.png' alt='earth' />
					<div className={styles.lineIcon}></div>
				</div>
			</div>
		</section>
	)
}

export default Header
