function More(props) {
  return (
    <div className="more" onClick={props.onClick}>
      <button className="more__button" type="submit" value="еще">
        Ещё
      </button>
    </div>
  );
}

export default More;
