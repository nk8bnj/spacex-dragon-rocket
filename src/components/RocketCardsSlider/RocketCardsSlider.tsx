import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import RocketCard from '@/components/RocketCard/RocketCard'

import { IRocket } from '@/types/Rocket.interface'

import 'swiper/scss'
import 'swiper/scss/pagination'

import { useRef } from 'react'

import styles from './RocketCardsSlider.module.scss'

interface Props {
	rockets: IRocket[]
}

const RocketCardsSlider: React.FC<Props> = ({ rockets }) => {
	const swiperRef = useRef<SwiperType | null>(null)

	return (
		<div>
			<Swiper
				className='swiper'
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				slidesPerView={3}
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
			>
				{rockets.map(rocket => (
					<SwiperSlide key={rocket.id}>
						<RocketCard rocket={rocket} />
					</SwiperSlide>
				))}

				<div className={styles.sliderButtons}>
					<button
						className={styles.button}
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<img src='images/leftArrow.png' alt='Left arrow' />
					</button>

					<button
						className={styles.button}
						onClick={() => swiperRef.current?.slideNext()}
					>
						<img
							src='images/rightArrow.png'
							alt='Right arrow'
						/>
					</button>
				</div>
			</Swiper>
		</div>
	)
}

export default RocketCardsSlider
