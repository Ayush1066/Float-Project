import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <article className="product">
        <h2 className="prod-title">converse chuck taylor all star low top</h2>
        <div className="clearfix">
          <img
            className="prod-img"
            src="shoe.jpeg"
            alt="canvas shoes"
            height="250px"
            width="250px"
          />
          <div className="prod-info">
            <p className="price">$65.00</p>
            <p className="shipping">Free Shipping</p>
            <p className="prod-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              tempore!
            </p>
            <a className="more-info">More Information &rarr;</a>
          </div>
          <div className="prod-details">
            <h3 className="details-title">Product details</h3>
            <ul className="details-list">
              <li>Lightweight, durable canvas sneakers</li>
              <li>Lightly padded footbed for added comfort</li>
              <li>Iconic Chuck Taylor anckle patch</li>
            </ul>
          </div>
        </div>
        <button className="add-cart">Add to Cart</button>
      </article>
    </div>
  );
}

export default App;
