import { ratingValueType } from "../../App"

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
  setRatingValue: (value: ratingValueType) => void
}
function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} setRatingValue={props.setRatingValue} ratingValue={1} />
      <Star selected={props.value > 1} setRatingValue={props.setRatingValue} ratingValue={2} />
      <Star selected={props.value > 2} setRatingValue={props.setRatingValue} ratingValue={3} />
      <Star selected={props.value > 3} setRatingValue={props.setRatingValue} ratingValue={4} />
      <Star selected={props.value > 4} setRatingValue={props.setRatingValue} ratingValue={5} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  ratingValue: 0 | 1 | 2 | 3 | 4 | 5
  setRatingValue: (value: ratingValueType) => void
}
function Star(props: StarPropsType) {
  return (
    <span onClick={() => { props.setRatingValue(props.ratingValue) }}>
      {props.selected ? <b>Star </b> : 'Star '}
    </span>
  )
}
export default Rating