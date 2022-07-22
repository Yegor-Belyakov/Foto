import React from 'react'
import { connect } from 'react-redux'
import { decrementLikes, incrementLikes } from './redux/actions'



const Likes = (props) => {
  return (
    <div className='button-controls'>
      <button onClick={props.onIcrementLikes}>♥ {props.likes} Like</button>
      <button disabled={props.likes === 0} onClick={props.onDerementLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  const {likesReducer} = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIcrementLikes: () => {
      return dispatch(incrementLikes())
    },
    onDerementLikes: () => {
      return dispatch(decrementLikes())
    
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)