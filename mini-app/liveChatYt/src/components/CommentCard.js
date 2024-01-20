import React from 'react'

const CommentCard = ({name , comment}) => {
  return (
    <div className='flex p-1  '>
      <h2 className='font-bold	'>{name}</h2>
      <p className='ml-2'>{comment}</p>

    </div>
  )
}

export default CommentCard