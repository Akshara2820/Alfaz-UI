import React from "react";

function Header() {
  return (
    <>
      <div className="">
        {/* ***** Header  ******** */}
        <div className="lg:flex gap-5 justify-between p-10">
          <div className="flex gap-5">
            <div>
              <img
                className="w-24 rounded-lg"
                src="./logo.jpg"
                alt="loading..."
              />
            </div>
            <div>
              <div className="font-bold text-white text-[24px]">Alfaz</div>
              <div className="text-[12px] text-white">Link</div>
            </div>
          </div>
          <div>
            <ul className="sm:flex gap-10 text-white">
              <li>Home</li>
              <li>Network</li>
              <li>Music</li>
              <li className="text-indigo-500">Link</li>
              <li>Brands</li>
            </ul>
          </div>

          <div>
            <ul className="sm:flex gap-10 text-white sm:mt-0 mt-10">
              <li>
                <img className="w-6 " src="translate.png" alt="loading..." />
              </li>
              <li>Eng</li>
              <li className="sm:block hidden">|</li>
              <li>Login</li>
              <li className="">
                <button className="bg-sky-500 roundd-lg px-5 py-1 rounded-lg text-white">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ****************** main *************** */}
        
      </div>
    </>
  );
}

export default Header;
