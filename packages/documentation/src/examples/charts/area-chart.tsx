// tslint:disable
import * as React from 'react'
import { Area, Axis, Chart, LinearScale, Dimension } from '@markable/react'
import { AxisOrientation, Interpolation } from '@markable/interfaces'
import { Renderer } from '@markable/react-svg-renderer'

const renderer = new Renderer()

const data = [
  { u: 1, v: 28 },
  { u: 2, v: 55 },
  { u: 3, v: 43 },
  { u: 4, v: 91 },
  { u: 5, v: 81 },
  { u: 6, v: 53 },
  { u: 7, v: 19 },
  { u: 8, v: 87 },
  { u: 9, v: 52 },
  { u: 10, v: 48 },
  { u: 11, v: 24 },
  { u: 12, v: 49 },
  { u: 13, v: 87 },
  { u: 14, v: 66 },
  { u: 15, v: 17 },
  { u: 16, v: 27 },
  { u: 17, v: 68 },
  { u: 18, v: 16 },
  { u: 19, v: 49 },
  { u: 20, v: 15 },
]

/**
 * Adapted from https://vega.github.io/vega/examples/bar-chart/
 */
export default class AreaChart extends React.Component {
  public render() {
    return (
      <Chart width={500} height={200} renderer={renderer} data={{ data }}>
        <LinearScale name="x" table="data" domain="u" range={Dimension.Width} />
        <LinearScale
          name="y"
          table="data"
          domain="v"
          range={Dimension.Height}
          nice
          zero
        />

        <Axis orient={AxisOrientation.Bottom} scale="x" tickCount={20} />
        <Axis orient={AxisOrientation.Left} scale="y" />

        <Area
          table="data"
          x={({ d }, { x }) => x(d.u)}
          y={({ d }, { y }) => y(d.v)}
          y2={(d, { y }) => y(0)}
          fill="steelblue"
          interpolate={Interpolation.Monotone}
        />
      </Chart>
    )
  }
}