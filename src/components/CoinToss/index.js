import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, totalCount: 0, toss: 'heads'}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const result = tossResult === 0 ? 'heads' : 'tails'
    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    this.setState({toss: result})

    if (result === 'heads') {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {headsCount, tailsCount, totalCount, toss} = this.state
    return (
      <div className="toss-main-container">
        <div className="toss-card-container">
          <h1 className="main-heading">Coin Toss Game </h1>
          <p className="toss-head-text"> Heads (or) Tails </p>
          <div>
            {toss === 'heads' ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                alt="toss result"
                className="coin"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                alt="toss result"
                className="coin"
              />
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={this.onTossCoin}
              className="test-btn"
            >
              Toss Coin
            </button>
          </div>

          <div className="all-counts">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
