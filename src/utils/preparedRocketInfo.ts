import { UnitsOfMeasurement } from '@/types/enums'
import { IRocket } from '@/types/Rocket.interface'

const preparedRocketInfo = (rocket: IRocket) => {
	const info = [
		{
			name: 'Height',
			value: [
				[rocket.height_w_trunk.meters, UnitsOfMeasurement.Meter].join(' '),
				[rocket.height_w_trunk.feet, UnitsOfMeasurement.Feet].join(' ')
			].join(' / ')
		},
		{
			name: 'Diameter',
			value: [
				[rocket.diameter.meters, UnitsOfMeasurement.Meter].join(' '),
				[rocket.diameter.feet, UnitsOfMeasurement.Feet].join(' ')
			].join(' / ')
		},
		{
			name: 'Spacecraft volume',
			value: [
				[
					rocket.launch_payload_vol.cubic_meters,
					UnitsOfMeasurement.CubicMeter
				].join(' '),
				[
					rocket.launch_payload_vol.cubic_feet,
					UnitsOfMeasurement.CubicFeet
				].join(' ')
			].join(' / ')
		},
		{
			name: 'Trunk volume',
			value: [
				[
					rocket.trunk.trunk_volume.cubic_meters,
					UnitsOfMeasurement.CubicMeter
				].join(' '),
				[
					rocket.trunk.trunk_volume.cubic_feet,
					UnitsOfMeasurement.CubicFeet
				].join(' ')
			].join(' / ')
		},
		{
			name: 'Launch payload mass',
			value: [
				[rocket.launch_payload_mass.kg, UnitsOfMeasurement.Kilograms].join(' '),
				[rocket.launch_payload_mass.lb, UnitsOfMeasurement.Pounds].join(' ')
			].join(' / ')
		},
		{
			name: 'Return payload mass',
			value: [
				[rocket.return_payload_mass.kg, UnitsOfMeasurement.Kilograms].join(' '),
				[rocket.return_payload_mass.lb, UnitsOfMeasurement.Pounds].join(' ')
			].join(' / ')
		},
		{
			name: 'Heat shield material',
			value: rocket.heat_shield.material
		},
		{
			name: 'Heat shield temperature',
			value: rocket.heat_shield.temp_degrees.toString()
		},
		{
			name: 'Pressurized capsule volume',
			value: [
				[
					rocket.pressurized_capsule.payload_volume.cubic_meters,
					UnitsOfMeasurement.CubicMeter
				].join(' '),
				[
					rocket.pressurized_capsule.payload_volume.cubic_feet,
					UnitsOfMeasurement.CubicFeet
				].join(' ')
			].join(' / ')
		},
		{
			name: 'Thrusters amount',
			value: rocket.thrusters
				.reduce((acc, thruster) => acc + thruster.amount, 0)
				.toString()
		},
		{
			name: 'Dry mass',
			value: [
				[rocket.dry_mass_kg, UnitsOfMeasurement.Kilograms].join(' '),
				[rocket.dry_mass_lb, UnitsOfMeasurement.Pounds].join(' ')
			].join(' / ')
		}
	]

	return info
}

export default preparedRocketInfo
