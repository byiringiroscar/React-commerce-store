const product = (props) => (
  <div className="product">
    <div className="circle">
      <img className="product-img" src={props.imageurl} alt="" />
    </div>
    <p><strong>{props.price}</strong></p>
    <p>{props.name}</p>
  </div>
);

export default product;
