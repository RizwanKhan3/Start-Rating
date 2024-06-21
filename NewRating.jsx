import React, { useState } from 'react'

const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            filled={hover ? hover >= index + 1 : rating >= index + 1}
            onClick={() => handleRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>
      <p>{hover || rating || ''}</p>
    </div>
  )
}

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      role="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: 'pointer', margin: '0 5px' }}
    >
      {filled ? (
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="orange"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27Z" />
        </svg>
      ) : (
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.4L8.24 17.67C7.66 18.02 6.92 17.57 7.09 16.91L8.18 12.75L4.73 9.64C4.18 9.15 4.48 8.3 5.18 8.25L9.46 7.92L11.23 4.1C11.53 3.43 12.47 3.43 12.77 4.1L14.54 7.92L18.82 8.25C19.52 8.3 19.82 9.15 19.27 9.64L15.82 12.75L16.91 16.91C17.08 17.57 16.34 18.02 15.76 17.67L12 15.4ZM12 2C11.24 2 10.53 2.5 10.21 3.21L8.44 7.04L4.16 7.37C3.25 7.44 2.82 8.54 3.47 9.21L6.92 12.32L5.84 16.48C5.58 17.46 6.57 18.25 7.45 17.79L12 15.47L16.55 17.79C17.43 18.25 18.42 17.46 18.16 16.48L17.08 12.32L20.53 9.21C21.18 8.54 20.75 7.44 19.84 7.37L15.56 7.04L13.79 3.21C13.47 2.5 12.76 2 12 2Z"
            fill="black"
          />
        </svg>
      )}
    </span>
  )
}

export default StarRating
