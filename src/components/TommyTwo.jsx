import React from "react";
import MyTravellingData from "../data/TommyTwo.json";
import { Link } from "react-router-dom";

const TommyTwo = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-5 px-[200px] mb-11 bg-[#121111] py-5">
        {MyTravellingData.profile.map((item, index) => (
          <div className="bg-black">
            <img src={item.image} alt="myimage" className="w-[100%]" />
            <div className="px-[20px] py-[10px]">
              <h1 className="text-[18px] font-semibold text-[white]">
                {item.Location}
              </h1>
              <div className="flex items-center justify-between text-[15px] mt-[10px]">
                <div className="text-xs flex items-center justify-start gap-2 flex-wrap ">
                  <span className="text-white bg-[#70A9FF] px-[7px] rounded-[4px]">
                    {item.rating.toFixed(1)}
                  </span>
                  <span className="text-[white]">{item.no_rating}</span>
                  <span className="text-[white]">|</span>
                  <span className="text-[white]">
                    {item.fm}{" "}
                    <span className="text-[red]">
                      {item.form_amount[0]} - {item.form_amount[1]}
                    </span>
                  </span>
                  <span className="text-[white]"> |</span>
                  <span className="text-[white]">{item.occupation}</span>
                </div>
              </div>
              <div className="flex justify-start items-start gap-2 mt-[15px]">
                <img src={item.profile_picture} alt="" />
                <p className="text-[14px] text-[white] text-left w-full">
                  {item.description.substring(0, 70)}....{" "}
                  <small className="text-xs text-[grey] cursor-pointer">
                    <Link to="/tommyTwo">read more</Link>
                  </small>
                </p>
              </div>
              <hr className="my-[30px] bg-[#767F86] h-[1px]" />

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

export default TommyTwo;
