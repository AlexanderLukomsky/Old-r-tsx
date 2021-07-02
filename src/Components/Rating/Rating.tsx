type RatingPropsType = {
  value: number
}
function Rating(props: RatingPropsType) {
  switch (props.value) {
    case 1: return (
      <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
      </div>
    );
    case 2: return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    );

    default: return (
      <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
      </div>
    );
  };
}

type StarPropsType = {
  selected: boolean
}
function Star(props: StarPropsType) {
  switch (props.selected) {
    case true: return <span><b>Star </b></span>;
    default: return <span>Star </span>;
  }
}
export default Rating