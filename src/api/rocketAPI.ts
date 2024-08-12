import axios from 'axios'

import { mockRockets } from '@/assets/mockRockets'

const ROCKETS_URL = 'https://api.spacexdata.com/v4/dragons'
const STARSHIP_SLIDES_URL = 'https://nk8bnj.github.io/spacex-dragon-rocket/api/starshipSlides.json'

export async function getRockets() {
	const response = await axios.get(ROCKETS_URL)

	return [...response.data, ...mockRockets]
}

export async function getRocket(id: string) {
	const response = await axios.get(`${ROCKETS_URL}/${id}`)

	return response.data
}

export async function getSlides() {
	const response = await axios.get(STARSHIP_SLIDES_URL)

	return response.data
}
