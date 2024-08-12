import { IRocket } from '@/types/Rocket.interface'

export const mockRockets: IRocket[] = [
	{
		heat_shield: {
			material: 'PICA-X',
			size_meters: 3.6,
			temp_degrees: 1650,
			dev_partner: 'NASA'
		},
		launch_payload_mass: {
			kg: 22800,
			lb: 50265
		},
		launch_payload_vol: {
			cubic_meters: 110,
			cubic_feet: 3885
		},
		return_payload_mass: {
			kg: 1500,
			lb: 3307
		},
		return_payload_vol: {
			cubic_meters: 14,
			cubic_feet: 494
		},
		pressurized_capsule: {
			payload_volume: {
				cubic_meters: 11,
				cubic_feet: 388
			}
		},
		trunk: {
			trunk_volume: {
				cubic_meters: 14,
				cubic_feet: 494
			},
			cargo: {
				solar_array: 2,
				unpressurized_cargo: true
			}
		},
		height_w_trunk: {
			meters: 7.2,
			feet: 23.6
		},
		diameter: {
			meters: 3.7,
			feet: 12.1
		},
		first_flight: '2010-12-08',
		flickr_images: ['https://i.imgur.com/9fWdwNv.jpg'],
		name: 'Mock Dragon 1',
		type: 'Capsule',
		active: true,
		crew_capacity: 0,
		sidewall_angle_deg: 15,
		orbit_duration_yr: 2,
		dry_mass_kg: 4200,
		dry_mass_lb: 9259,
		thrusters: [
			{
				type: 'Draco',
				amount: 18,
				pods: 4,
				fuel_1: 'MMH',
				fuel_2: 'NTO',
				isp: 300,
				thrust: {
					kN: 0.4,
					lbf: 90
				}
			}
		],
		wikipedia: 'https://en.wikipedia.org/wiki/Dragon_1',
		description: 'The first orbital spacecraft developed by SpaceX.',
		id: 'mockdragon1'
	},
	{
		heat_shield: {
			material: 'PICA-X',
			size_meters: 4.0,
			temp_degrees: 1800,
			dev_partner: 'NASA'
		},
		launch_payload_mass: {
			kg: 6000,
			lb: 13228
		},
		launch_payload_vol: {
			cubic_meters: 66,
			cubic_feet: 2331
		},
		return_payload_mass: {
			kg: 3000,
			lb: 6614
		},
		return_payload_vol: {
			cubic_meters: 10,
			cubic_feet: 353
		},
		pressurized_capsule: {
			payload_volume: {
				cubic_meters: 9,
				cubic_feet: 318
			}
		},
		trunk: {
			trunk_volume: {
				cubic_meters: 14,
				cubic_feet: 494
			},
			cargo: {
				solar_array: 2,
				unpressurized_cargo: false
			}
		},
		height_w_trunk: {
			meters: 8.1,
			feet: 26.6
		},
		diameter: {
			meters: 3.7,
			feet: 12.1
		},
		first_flight: '2020-05-30',
		flickr_images: [
			'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg'
		],
		name: 'Mock Dragon 2',
		type: 'Capsule',
		active: true,
		crew_capacity: 7,
		sidewall_angle_deg: 15,
		orbit_duration_yr: 2,
		dry_mass_kg: 6400,
		dry_mass_lb: 14110,
		thrusters: [
			{
				type: 'SuperDraco',
				amount: 8,
				pods: 2,
				fuel_1: 'MMH',
				fuel_2: 'NTO',
				isp: 235,
				thrust: {
					kN: 71,
					lbf: 16000
				}
			}
		],
		wikipedia: 'https://en.wikipedia.org/wiki/Dragon_2',
		description: "SpaceX's upgraded crewed spacecraft.",
		id: 'mockdragon2'
	}
]
