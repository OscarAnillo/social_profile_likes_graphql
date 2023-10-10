export const AdComponent = () => {
  return (
    <div className="ad-div">
      <div className="ad-container">
        <div className="ad-row">
          <h2>Sponsored</h2>
          <p>Ad</p>
        </div>
        <img
          src="https://falabella.scene7.com/is/image/FalabellaCO/3443717_1?wid=800&hei=800&qlt=70"
          alt=""
        />
        <div className="ad-row">
          <h3 className="ad-name">Chanel</h3>
          <button className="ad-button">Buy Now</button>
        </div>
        <p className="ad-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fuga cum
          tempore maiores, iste placeat asperiores ipsa recusandae id vero?
        </p>
      </div>
    </div>
  );
};
