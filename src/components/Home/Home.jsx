import { useEffect, useState } from "react";
import Baner from "./Baner";
import BrandName from "./Brand/BrandName";
import DiscountSection from "./DiscountSection/DiscountSection";
import Gaget from "../Gaget/Gaget";
import PopularProducts from "./PopularProducr/PopularProducts";

const Home = () => {
  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("/brand.json")
      .then((response) => response.json())
      .then((data) => setBrand(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div className="h-[75vh] pb-8 w-full">
        <Baner></Baner>
      </div>
      <div>
        <div className="border-b-2 lg:mt-10 md:mt-7 mt-3 pb-3">
          <h1 className="text-3xl font-bold text-center text-[#F2101E]">
            Our Popular Brands
          </h1>
        </div>
        <div className="grid md:grid-cols-3 max-w-screen-sm gap-6 md:gap-8 mx-auto py-10 grid-cols-2">
          {brand?.map((aBrand) => (
            <BrandName key={aBrand.id} aBrand={aBrand}></BrandName>
          ))}
        </div>
      </div>
      <div>
        <Gaget></Gaget>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center text-[#F2101E] mt-14 border-b-2 pb-3">
          Popular Products
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-3 lg:px-12 max-w-screen-2xl justify-between mt-8">
          {products?.map((product) => (
            <PopularProducts
              key={product.id}
              product={product}
            ></PopularProducts>
          ))}
        </div>
      </div>
      <div className="">
        <DiscountSection></DiscountSection>
      </div>
    </div>
  );
};

export default Home;
