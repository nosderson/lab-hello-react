function Card(props) {
  return (
    <div>
      <div>
        <img src={props.source} alt={props.alt} />
      </div>
      <h2>{props.title}</h2>
      <div>{props.text}</div>
    </div>
  );
}
export default Card;