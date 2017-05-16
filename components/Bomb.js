import React from 'react'

class Bomb extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    return (
      boomTime(this.state.secondsLeft)
    )
  }
}

export default Bomb

function boomTime(state) {
  if (state > 0) {
    return <div>{state} seconds left before I go boom!</div>
  } else {
    return <div>Boom!</div>
  }
}
