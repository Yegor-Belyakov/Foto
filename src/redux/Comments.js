import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleComment from '../SingleComment'
import uniqid from 'uniqid'
import { commentCreate } from './actions'

function Comments(props) {
  const dispatch = useDispatch()
  const [textComment, setTextComment] = useState('')
  const comments= useSelector(state => {
    const {commentsReducer} = state
    return commentsReducer.comments
  })
  const handleInput = (e) => setTextComment(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid()
    dispatch(commentCreate(textComment, id))
    setTextComment('')
  }
  return (
    <div className='card-comments'>
      <form onSubmit={handleSubmit} className='comments-item-create'>
        <input type='text' value={textComment} onChange={handleInput}></input>
        <input type='submit' hidden></input>
      </form>
      {!!comments.length && comments.map((res) => {
        return <SingleComment key={res.id} data={res}/>
      })}
      
    </div>
  )
}

export default Comments