import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentDelete, commentUpdate } from './redux/actions'

const SingleComment = ({data}) => {
  const dispatch = useDispatch()
  const [commentText, setCommentText] = useState('')
  const {text, id} = data
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(commentUpdate(commentText, id))
  }
  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(commentDelete(id))
  }
  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  }, [text])
  const handleInput = (e) => {
    setCommentText(e.target.value)
  }
  return (
    <form onSubmit={handleUpdate} className='comments-item'>
      <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
      <input type='text' value={commentText} onChange={handleInput}></input>
      <input type='submit' hidden></input>
    </form>
  )
}

export default SingleComment