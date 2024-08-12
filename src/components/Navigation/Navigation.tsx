import { Link } from 'react-router-dom'

import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<Link to='/'>
				<div className={styles.button}>Logo</div>
			</Link>
			<ul className={styles.items}>
				<Link to='/'>
					<li className={styles.item}>Home</li>
				</Link>
				<Link to='/about'>
					<li className={styles.item}>About</li>
				</Link>
				<Link to='/qa'>
					<li className={styles.item}>QA</li>
				</Link>
				<Link to='/contact'>
					<li className={styles.item}>Contact form</li>
				</Link>
			</ul>
			<Link to='/contact'>
				<div className={styles.button}>Contact form</div>
			</Link>
		</nav>
	)
}

export default Navigation
