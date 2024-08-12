import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getSlides } from '@/api/rocketAPI'

import { IRocket } from '@/types/Rocket.interface'
import { ISlide } from '@/types/Slide.interface'

interface starshipSlidesState {
	slides: ISlide[]
	rocket: IRocket | null
	isLoading: boolean
	error: string | null
}

const initialState: starshipSlidesState = {
	slides: [],
	rocket: null,
	isLoading: false,
	error: null
}

export const fetchSlides = createAsyncThunk(
	'starshipSlides/fetchSlides',
	async () => {
		const response = await getSlides()
		return response
	}
)

const starshipSlidesSlice = createSlice({
	name: 'starshipSlides',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchSlides.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(
				fetchSlides.fulfilled,
				(state, action: PayloadAction<ISlide[]>) => {
					state.slides = action.payload

					state.isLoading = false
				}
			)
			.addCase(fetchSlides.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message || 'Something went wrong'
			})
	}
})

export default starshipSlidesSlice.reducer
