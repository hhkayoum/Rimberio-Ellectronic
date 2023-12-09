const DiscountSection = () => {
  return (
    <div>
      <div className="flex justify-center gap-7 md:gap-16 lg:gap-28 items-center bg-[#E7EBEE] h-[65vh] rounded-lg lg:my-20 md:my-16 my-10">
        <div className="text-center px-3">
          <button className="px-3 py-1 text-base md:px-5 md:py-2 md:text-lg font-semibold rounded-lg bg-[#F2101E] text-white">
            Hurry Up !
          </button>
          <h2 className="md:text-4xl text-xl font-bold py-4">
            Up To 25% Discount <br />
            Check it Out
          </h2>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col shadow-">
              <span className="countdown font-mono md:text-5xl text-2xl rounded-lg border-2">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono md:text-5xl text-2xl rounded-lg border-2">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono  md:text-5xl text-2xl rounded-lg border-2">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono  md:text-5xl text-2xl rounded-lg border-2">
                <span style={{ "--value": 38 }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co/6b1r7CK/Samsung-Galaxy-S23-Series-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
