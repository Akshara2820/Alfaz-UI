import React from "react";
import Profile from "./profile";

function Main() {
  return (
    <>
    <div className="p-10">
   
          <div className="lg:flex justify-around">
            <div>
              <button className="bg-sky-500 roundd-lg px-10 py-1 rounded-lg text-white">
                Best Link share Plateform
              </button>
              <div className="text-white md:text-[50px] text-[30px] font-bold">
                Manage All your Social <br />
                In One Place
              </div>
              <div className="text-white mt-4">
                Build your own link-in-bio page. Everything for your <br />
                community, all in one place with alfaz link
              </div>
              <div className="mt-5">
              <button className="bg-[#ffffff2e] rounded-lg px-5 py-2 sm:flex gap-5">
              <div> <img className="w-6" src="./email.png" alt="loading..."/></div>
              <div className="text-white">Your Email Address</div>
              <div className="bg-green-500 rounded-lg px-3 py-1 text-white">Submit</div>
            
              </button>
              </div>
              <div className="-mt-5"> 
              <div> <img className="w-24" src="./stars.png" alt="loading..."/> </div>
              <div className="text-white -mt-5">Build yourown link-in-bio page. Everythingsfor your community,<br/> all in one place with alfan link </div>
              </div>
            </div>

            {/************** end ************** */}
          </div>
         
            
        </div>
       
    </>
  );
}

export default Main;
