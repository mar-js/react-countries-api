import React from 'react'

function Loading() {
  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <div className="spinner-border"
        role="status"
        style={ {
          width: 10 + 'rem',
          height: 10 + 'rem'
        } }
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
