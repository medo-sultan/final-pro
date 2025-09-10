import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./productCard.css";

export default function ProductCard({ product }) {
  return (
    <Card className="custom-product-card shadow-sm border-0">
      <div className="product-image-wrapper">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        {product.isNew && <span className="badge new-badge">جديد</span>}
        {product.discount && (
          <span className="badge discount-badge">خصم {product.discount}%</span>
        )}
      </div>
      <Card.Body className="product-body d-flex flex-column">
        <h5 className="product-title mb-2">{product.title}</h5>
        <p className="product-desc text-muted mb-3">
          {product.Description?.length > 60
            ? product.Description.slice(0, 60) + "..."
            : product.Description}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="product-price">
            {product.discountPrice ? (
              <>
                <span className="old-price">{product.price}$</span>
                <span className="new-price ms-2">{product.discountPrice}$</span>
              </>
            ) : (
              <span className="new-price">{product.price}$</span>
            )}
          </span>
          <span className="product-rating">⭐ {product.rating || "4.5"}</span>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-primary w-100 mt-auto details-btn"
        >
          تفاصيل المنتج
        </Link>
      </Card.Body>
    </Card>
  );
}
