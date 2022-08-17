import React from "react";

function Profile() {
  return (
    <>
      <div className="flex justify-center p-5 lg:ml-[480px] ">
        <div className="bg-white rounded-lg sm:flex gap-5 p-5 pr-28 py-2 px-10 ">
          <div>
            <img
              className="rounded-full h-[50px] w-[50px]  "
              src="profile.jpg"
              alt="loading..."
            />
          </div>
          <div>
            <div className="font-semibold mt-3">Yashika Rai</div>
            <div className=" ">Manager</div>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Profile;
