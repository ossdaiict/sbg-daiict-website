import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts'

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
  } = props

  return (
    <g>
      <text
        x={cx}
        fontSize={24}
        fontWeight={'bold'}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
      >
        {value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  )
}

const renderActiveShapeMore = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
  } = props

  return (
    <g>
      <text
        x={cx}
        fontSize={24}
        fontWeight={'bold'}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
      >
        {`${value} +`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  )
}

class LabeledPie extends Component {
  static propTypes = {
    data: PropTypes.array,
    innerRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    outerRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
  }
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
    // this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    })
  }

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={
              this.props.moreThan ? renderActiveShapeMore : renderActiveShape
            }
            data={this.props.data}
            innerRadius={this.props.innerRadius}
            outerRadius={this.props.outerRadius}
            fill={this.props.color}
            onMouseEnter={(data, activeIndex) => {
              this.onPieEnter(data, activeIndex)
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default LabeledPie
