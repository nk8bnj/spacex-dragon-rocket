import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getRocket, getRockets } from '@/api/rocketAPI'

import preparedRocketInfo from '@/utils/preparedRocketInfo'

import { IRocket } from '@/types/Rocket.interface'
import { IRocketInfo } from '@/types/RocketInfo.interface'

interface RocketsState {
	rockets: IRocket[]
	rocket: IRocket | null
	rocketDetails: IRocketInfo[]
	isLoading: boolean
	error: string | null
}

const initialState: RocketsState = {
	rockets: [],
	rocket: null,
	rocketDetails: [],
	isLoading: false,
	error: null
}

export const fetchRockets = createAsyncThunk(
	'rockets/fetchRockets',
	async () => {
		const response = await getRockets()
		return response
	}
)

export const getRocketById = createAsyncThunk(
	'rockets/getRocketById',
	async (id: string) => {
		const response = await getRocket(id)
		return response
	}
)

const rocketsSlice = createSlice({
	name: 'rockets',
	initialState,
	reducers: {
		getRocketDetails: (state, action: PayloadAction<IRocket>) => {
			state.rocketDetails = preparedRocketInfo(action.payload)
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchRockets.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(
				fetchRockets.fulfilled,
				(state, action: PayloadAction<IRocket[]>) => {
					state.rockets = action.payload

					state.isLoading = false
				}
			)
			.addCase(fetchRockets.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message || 'Something went wrong'
			})
			.addCase(getRocketById.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(
				getRocketById.fulfilled,
				(state, action: PayloadAction<IRocket>) => {
					state.rocket = action.payload
					state.isLoading = false
				}
			)
			.addCase(getRocketById.rejected, (state, action) => {
				state.isLoading = false
				state.rocket = null
				state.error = action.error.message || 'Something went wrong'
			})
	}
})

export const { setIsLoading, getRocketDetails } = rocketsSlice.actions

export default rocketsSlice.reducer
