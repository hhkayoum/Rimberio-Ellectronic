import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ cardData }) => {
  const { image, brand, name, price, rating, _id } = cardData;

  return (
    <div>
      {cardData ? (
        <div>
          <div className="md:h-[400px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="flex justify-center">
                <img
                  className="p-4 rounded-t-lg md:h-[220px] h-[150px]"
                  src={image}
                  alt="product image"
                />
              </div>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className=" text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {name}
                </h5>
              </a>
              <a href="#">
                <h5 className="md:text-lg text-medium font-medium tracking-tight text-gray-900 dark:text-white">
                  Brand Name : {brand}
                </h5>
              </a>

              <div>
                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
              </div>
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                Price : $ {price}
              </span>

              <div className="flex items-center gap-5 pt-4 bottom-0">
                <Link to={`/showDetails/${_id}`}>
                  <button className="btn bg-[#F2101E] btn-sm text-white hover:bg-[#f55f69]">
                    Details
                  </button>
                </Link>

                <Link to={`/updateProduct/${_id}`}>
                  <button className="btn bg-[#F2101E] btn-sm text-white hover:bg-[#f55f69]">
                    {" "}
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Data not found</div>
      )}
    </div>
  );
};

export default ProductCard;
