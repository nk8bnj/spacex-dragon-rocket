import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

import { ISlide } from '@/types/Slide.interface'

import styles from './StarshipSlider.module.scss'

import 'swiper/scss'

interface Props {
	slides: ISlide[]
}

const StarshipSlider: React.FC<Props> = ({ slides }) => {
	const swiperRef = useRef<SwiperType | null>(null)

	return (
		<Swiper
			className='swiper'
			onSwiper={swiper => {
				swiperRef.current = swiper
			}}
			slidesPerView={1}
			spaceBetween={10}
			loop={true}
			autoplay={{ delay: 2500 }}
			speed={1100}
			pagination={{ clickable: true, el: '.swiper-pagination' }}
			modules={[Navigation, Pagination, Autoplay]}
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div
						className={styles.starshipSlide}
						style={{ backgroundImage: `url(${slide.image})` }}
					>
						<div className={styles.slideContent}>
							<div className={styles.contentContainer}>
								<h2 className={styles.title}>{slide.title}</h2>
								<p className={styles.description}>{slide.description}</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
			<div className={styles.swiperButtons}>
				<button
					className={styles.swiperButtonPrev}
					onClick={() => swiperRef.current?.slidePrev()}
				>
					<img src='images/leftArrow.png' alt='Left arrow' />
				</button>
				<div className='swiper-pagination'></div>
				<button
					className={styles.swiperButtonNext}
					onClick={() => swiperRef.current?.slideNext()}
				>
					<img src='images/rightArrow.png' alt='Right arrow' />
				</button>
			</div>
		</Swiper>
	)
}

export default StarshipSlider
