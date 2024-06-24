// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickingButton = () => {
    this.setState(previousState => ({
      randomNumber: previousState.randomNumber + Math.ceil(100 * Math.random()),
    }))
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-button"
            type="button"
            onClick={this.onClickingButton}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
