import React from "react";

function RightBar() {
  return (
    <>
      <div className="p-10 md:mr-40  relative max-w-[600px]">
        <div className="md:block hidden absolute top-0 -z-10 lg:-right-[1%] right-[50%]">
          <img className="w-24 " src="./Ellipse 16.svg" />
        </div>

        <div className="bg-white md:w-[300px] rounded-lg md:mt-0 mt-5 w-[250px]">
          <div className=" relative md:left-[280px]  left-[220px]">
            <div className="sm:block hidden absolute text-white bg-white rounded-full shadow-lg p-3 mt-12">
              <div>
                <img className="md:w-8 w-6 " src="./tik-tok.png" />
              </div>
              <div>
                <img className="md:w-8 w-6 mt-2" src="./snapchat.png" />
              </div>
              <div>
                <img className="md:w-8 w-6 mt-2" src="./linkedin.png" />
              </div>
              <div>
                <img className="md:w-8 w-6 mt-2" src="./twitter.png" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" p-5">
              <img
                className="rounded-full h-[100px] w-[100px]  "
                src="profile.jpg"
                alt="loading..."
              />
              <div className="font-semibold ">Akshara Mishra</div>
              <div className="text-gray-500 text-[14px]">
                54 Million followers
              </div>
              <div className="font-semibold  mt-10">Official Account </div>
              <div className="font-semibold"> for 25-E-Sports</div>
              <div className="flex gap-1 mt-5">
                <div>
                  <img
                    className="w-4 mt-1"
                    src="./location.png"
                    alt="loading"
                  />
                </div>
                <div className="font-semibold">Saudi Arabia</div>
              </div>
            </div>
            <div></div>
          </div>

          {/** call card */}

          <div className="lg:block hidden relative right-[180px] xl:bottom-24 ">
            <div className="absolute text-white bg-white rounded-lg p-3 flex gap-5 shadow-lg">
              <div>
                <img className="w-12" src="./telephone.png" />
              </div>
              <div className="text-black font-bold">
                book 1-1 call <br /> with me
              </div>
            </div>
          </div>
          {/**    <div className="md:block hidden relative right-[180px] bottom-60"> <img className="w-24 " src="./Ellipse 15 (1).svg"/></div> */}

          <div className="p-5">
            <div className="bg-gray-100 rounded-lg p-2 flex gap-5">
              <div>
                <img className="w-6" src="./facebook.png" />
              </div>
              <div className="font-semibold">Follow my page</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-2 flex gap-5 mt-2">
              <div>
                <img className="w-6" src="./youtube.png" />
              </div>
              <div className="font-semibold">Suscribe my account</div>
            </div>
          </div>

          <div className="">
            <div className=" sm:block hidden relative md:left-[250px] left-[200px] bottom-36">
              <div className="absolute  bg-white rounded-lg p-5 md:px-12  shadow-lg ">
                <div className="flex gap-10">
                  <div>
                    <img className="md:w-8 w-6" src="favicon.ico" />
                  </div>
                  <div className="bg-green-400 rounded-lg p-1">+10%</div>
                </div>
                <div className="font-semibold md:text-[24px] ">2,34,000</div>
                <div className="">Last 7 days</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:block hidden absolute -z-10  bottom-0 lg:left-[60%] left-[30%] w-52">
          <img src="Polygon 1.svg" />
        </div>
      </div>
    </>
  );
}

export default RightBar;
