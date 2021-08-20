import { useState } from "react"
import { ratingValueType } from "../../App"
import Rating from "./Rating"

export default {
  title: 'Rating',
  component: Rating
}

export const EmptyRating = () => <Rating setRatingValue={() => { }} value={0} />
export const Rating1 = () => <Rating setRatingValue={() => { }} value={1} />
export const Rating2 = () => <Rating setRatingValue={() => { }} value={2} />
export const Rating3 = () => <Rating setRatingValue={() => { }} value={3} />
export const Rating4 = () => <Rating setRatingValue={() => { }} value={4} />
export const Rating5 = () => <Rating setRatingValue={() => { }} value={5} />
export const RatingChanges = () => {
  const [ratingValue, setRatingValue] = useState<ratingValueType>(5);
  return < Rating value={ratingValue} setRatingValue={setRatingValue} />
}