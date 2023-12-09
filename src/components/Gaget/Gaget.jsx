const Gaget = () => {
  return (
    <div className="lg:px-12  mt-14">
      <div className="flex justify-center items-center gap-5">
        <div className="bg-[#F2F2F2] w-full  md:h-[380px] h-[300px] rounded-lg ">
          <div className="flex justify-center items-center text-center rounded-lg pt-7">
            <div>
              <h2 className="md:text-xl text-medium font-bold">
                ENTERTAINMENT & GAMES
              </h2>
              <h1 className="md:text-3xl text-xl font-bold my-2">
                Just Starting at $800 Hurry up !
              </h1>
              <button className="px-3 py-1 text-base md:px-5 md:py-2 md:text-lg font-semibold rounded-lg bg-[#F2101E] text-white">
                Shop Now
              </button>
              <div className="flex justify-center items-center">
                <img
                  className="md:w-[300px] w-[200px] p-10"
                  src="https://i.ibb.co/BymW5M3/Front-View-Microsoft-Xbox-Series-X-Controller-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F2F2] w-full md:h-[380px] h-[300px] rounded-lg">
          <div className="flex justify-center items-center rounded-lg text-center pt-7">
            <div>
              <h2 className="md:text-xl text-medium font-bold">
                SECURITY SMART CAMERA
              </h2>
              <h1 className="md:text-3xl text-xl font-bold my-2">
                Just Starting at $850 Hurry up !
              </h1>
              <button className="px-3 py-1 text-base md:px-5 md:py-2 md:text-lg font-semibold rounded-lg bg-[#F2101E] text-white">
                Shop Now
              </button>
              <div className="flex justify-center items-center">
                <img
                  className="md:w-[300px] lg:h-[250px] md:h-[220px] w-[200px] h-[150px]  p-10"
                  src="https://i.ibb.co/6WKWNsj/Arlo-Essential-Spotlight-1-Camera-Indoor-Outdoor-Wire-Free-1080p-Security-Camera-White-White-Indoor.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaget;
