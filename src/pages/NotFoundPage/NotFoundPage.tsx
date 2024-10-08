import { Link } from 'react-router-dom'

import styles from './NotFoundPage.module.scss'

export default function NotFoundPage() {
	return (
		<main className={styles.notFoundPage}>
			<div className={styles.content}>
				<p className={styles.title}>Sorry, page not found</p>
				<Link to='/'>
					<p className={styles.link}> Go to main page</p>
					<img src='images/leftArrow.png' alt='Left arrow' />
				</Link>
			</div>
		</main>
	)
}
