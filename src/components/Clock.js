import React from 'react'

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ date: new Date() }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString()}</span>
  }

}

export default Clock
