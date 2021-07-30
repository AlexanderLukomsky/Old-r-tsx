type RatingPropsType = {
  value: 1 | 2 | 3 | 4 | 5
}
function Rating(props: RatingPropsType) {
  // const star = []
  // for (let i = 0; i < 5; i++) {
  //   if (i < props.value) {
  //     star.push(<Star selected={true} />)
  //   } else {
  //     star.push(<Star selected={false} />)
  //   }
  // }
  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  )
}

type StarPropsType = {
  selected: boolean
}
function Star(props: StarPropsType) {
  if (props.selected) {
    return <span><b>Star </b></span>;
  }
  return <span>Star </span>;
}
export default Rating