import { configureStore } from '@reduxjs/toolkit'

import rocketsReducer from './rocketsSlice'
import starshipSlidesReducer from './starshipSlidesSlice'

const store = configureStore({
	reducer: {
		rockets: rocketsReducer,
		starshipSlides: starshipSlidesReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
