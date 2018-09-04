import { bin } from '../bin'
import { dataset } from '../dataset'

describe('The Bin transform', () => {
	it('can bin a basic dataset', () => {
		const data = [
			{ amount: 3.7 },
			{ amount: 6.2 },
			{ amount: 5.9 },
			{ amount: 8 },
		]

		const ds = dataset().add(
			'data',
			data,
			bin('amount')
				.extent(0, 10)
				.maxBins(5),
		)

		const binned = (ds.get('data') as any[]).map(d => ({
			amount: d.amount,
			bin0: d.bin0,
			bin1: d.bin1,
		}))
		expect(binned).toEqual([
			{ amount: 3.7, bin0: 2, bin1: 4 },
			{ amount: 6.2, bin0: 6, bin1: 8 },
			{ amount: 5.9, bin0: 4, bin1: 6 },
			{ amount: 8, bin0: 8, bin1: 10 },
		])
	})
})
