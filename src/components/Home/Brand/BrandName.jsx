import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandName = ({ aBrand }) => {
  const { image, brand } = aBrand;
  return (
    <div>
      <Link to={`/slider/${brand}`}>
        <div className="  bg-base-100 shadow-2xl h-44 py-5 rounded-2xl">
          <img src={image} alt="brandImage" className="rounded-xl h-full " />

          <div className=" items-center text-center bg-[#F2F2F2] rounded-lg py-2">
            <h2 className="text-medium font-bold">{brand}!</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandName;
