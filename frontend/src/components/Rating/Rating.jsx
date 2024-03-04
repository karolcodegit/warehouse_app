import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";

const Rating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(0);
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <CiStar
              className={`  cursor-pointer ${ratingValue <= (hover || rating) ? "text-yellow-500" : "text-gray-300"}`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            ></CiStar>
          </label>
        )
      })}
    </div>
  )
}

export default Rating