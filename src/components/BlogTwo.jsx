import React from "react";
import MyTravellingData from "../data/TommyOne.json"

const BlogTwo = () => {
  return (
    <div>
      <div className="items-center justify-center gap-5 px-[200px] mb-11 bg-[#121111] text-white py-10">
        {MyTravellingData.profile.map((item, index) => (
          <div>
            <div className="w-[80%] rounded-[20px] flex items-start">
              <img
                src={item.image}
                alt="myimage"
                className="w-[50%] rounded-[20px]"
              />
              <div>
                <h1 className="text-[30px] font-semibold text-[white] px-5">
                  {item.Location}
                </h1>
                <div className="px-[20px] py-[10px]">
                  <span className="text-white bg-[#70A9FF] px-[7px] rounded-[4px]">
                    {item.rating.toFixed(1)}
                  </span>

                  <span className="text-[white] px-[10px]">
                    {item.no_rating}
                  </span>
                  <span className="text-[white] px-[10px]">|</span>
                  <span className="text-[white]">
                    {item.fm}{" "}
                    <span className="text-[red] px-[5px]">
                      {item.form_amount[0]} - {item.form_amount[1]}
                    </span>
                  </span>
                  <span className="text-[white] px-[10px]"> |</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-[15px]">
                <p className="text-[14px] text-[white] text-left w-full">
                  {item.description}....
                </p>
              </div>
              <hr className="my-[30px] bg-[#767F86] h-[1px]" />

              <div className="flex items-center justify-between py-6">
                <img src={item.profile_picture} alt="" />
                <p>Dayond Dream</p>
              </div>
              <div className="flex justify-between items-center mb-[10px]">
                {item.availability === true ? (
                  <p className="text-[red] text-[14px] cursor-pointer">
                    Close Now
                  </p>
                ) : (
                  <p className="text-[#00C61C] text-[14px] cursor-pointer">
                    Open Now
                  </p>
                )}
                <div className="flex justify-between items-center gap-5 ">
                  <i className="pi pi-map-marker hover:text-[#00C61C] text-[12px] cursor-pointer"></i>
                  <i className="pi pi-download hover:text-[#00C61C] text-[12px] cursor-pointer"></i>
                  <i className="pi pi-heart hover:text-[#00C61C] text-[12px] cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTwo;
