const Baner = () => {
  const gradientStyle = {
    width: "100vw",
    height: "65vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundImage:'url(https://i.ibb.co/N7vbbHt/sony-banner-1.png)'
    backgroundImage:
      "url(https://i.ibb.co/yqrfqJG/HP-FT03-KV-S23-Ultra-1440x640-D.jpg)",
  };
  return (
    <div className="mt-28">
      <div className=" rounded-lg text-white " style={gradientStyle}>
        <div className="">
          <div className=" pl-4 md:pl-14 lg:pt-24 md:pt-10  pt-16 ">
            <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
              Galaxy S23 Ultra
            </h1>
            <p className="text-base md:text-lg font-medium my-4 md:my-6 lg:my-8">
              Still te king of low-light photography -- CNET
            </p>
            <p className="text-base md:text-lg font-medium my-4 md:my-6 lg:my-8">
              Get up to $800 or a minimum $100 intant trade in credit <br />
              toword Galaxy S23 Ultra.
            </p>
            <button className="px-3 py-1 text-base md:px-5 md:py-2 md:text-lg font-semibold rounded-3xl bg-[#F2101E] text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
