// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    if (this.state.speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else if (this.state.speed === 200) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onBrake = () => {
    if (this.state.speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else if (this.state.speed === 0) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="speed-img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h1 className="speed-desc">Speed is {speed}mph</h1>
        <p className="limit-desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accelerate-btn" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brake-btn" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
