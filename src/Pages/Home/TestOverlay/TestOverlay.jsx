import { FaMapMarkerAlt } from "react-icons/fa";
import "./TestOverlay.css";

export default function TestOverlay() {
  return (
    <>
      <div className="img-wrrapper">
        <img
          src="https://img.freepik.com/free-photo/men-shoes_1203-8387.jpg?w=1480"
          alt="test"
          className="product-iiimg"
        />
        <div className="overllay">
          <button className="icon-btttn">
            <FaMapMarkerAlt />
          </button>
        </div>
      </div>
    </>
  );
}
