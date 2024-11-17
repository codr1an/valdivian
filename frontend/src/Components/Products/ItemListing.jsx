import "./ItemListing.css";

const ItemListing = ({ image, title, description, price }) => {
  return (
    <div className="itemlisting-card mb-3">
      <div className="row g-1">
        <div className="col-md-2">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
            <p className="price">
              <big className="text-bold">{price}</big>
            </p>
            <button
              id="cartButton"
              type="button"
              className="btn btn-warning btn-sm"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListing;
