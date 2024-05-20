import React from "react";
import data from "../data/MyBlogData.json";
import { Link } from "react-router-dom";
import IMG from '../assets/e1.jpg'


const TravellingData = () => {
  const MyTravellingData = data.profile
  console.log(MyTravellingData.image);

  return (
    <div>
      <div className="flex justify-center items-center gap-5 px-[200px] mb-11 bg-[#121111] py-5">
        
        {/*  MyTravellingData[0] */}

        {/*  MyTravellingData[1] */}
        <div className="">
            <div className="bg-black">
              <img src={IMG} alt="myimage" className="w-[100%]" />
              <div className="px-[20px] py-[10px]">
                <h1 className="text-[18px] font-semibold text-[white]">
                  {MyTravellingData[1].Location}
                </h1>
                <div className="flex items-center justify-between text-[15px] mt-[10px]">
                  <div className="text-xs flex items-center justify-start gap-2 flex-wrap ">
                    <span className="text-white bg-[#70A9FF] px-[7px] rounded-[4px]">
                      {MyTravellingData[1].rating.toFixed(1)}
                    </span>
                    <span className="text-[white]">{MyTravellingData[1].no_rating}</span>
                    <span className="text-[white]">|</span>
                    <span className="text-[white]">
                      {MyTravellingData[1].fm}{" "}
                      <span className="text-[red]">
                        {MyTravellingData[1].form_amount[0]} - {MyTravellingData[1].form_amount[1]}
                      </span>
                    </span>
                    <span className="text-[white]"> |</span>
                    <span className="text-[white]">{MyTravellingData[1].occupation}</span>
                  </div>
                </div>
                <div className="flex justify-start items-start gap-2 mt-[15px]">
                  <img src={MyTravellingData[1].profile_picture} alt="" />
                  <p className="text-[14px] text-[white] text-left w-full">
                    {MyTravellingData[1].description.substring(0, 70)}....{" "}
                    <small className="text-xs text-[grey] cursor-pointer"><Link to='/blogTwo'>read more</Link></small>
                  </p>
                </div>
                <hr className="my-[30px] bg-[#767F86] h-[1px]" />

                <div className="flex justify-between items-center mb-[10px]">
                  {MyTravellingData[1].availability === true ? (
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
        </div>

        {/*  MyTravellingData[2] */}
        <div className="">
            <div className="bg-black">
              <img src={IMG} alt="myimage" className="w-[100%]" />
              <div className="px-[20px] py-[10px]">
                <h1 className="text-[18px] font-semibold text-[white]">
                  {MyTravellingData[2].Location}
                </h1>
                <div className="flex items-center justify-between text-[15px] mt-[10px]">
                  <div className="text-xs flex items-center justify-start gap-2 flex-wrap ">
                    <span className="text-white bg-[#70A9FF] px-[7px] rounded-[4px]">
                      {MyTravellingData[2].rating.toFixed(1)}
                    </span>
                    <span className="text-[white]">{MyTravellingData[2].no_rating}</span>
                    <span className="text-[white]">|</span>
                    <span className="text-[white]">
                      {MyTravellingData[2].fm}{" "}
                      <span className="text-[red]">
                        {MyTravellingData[2].form_amount[0]} - {MyTravellingData[2].form_amount[1]}
                      </span>
                    </span>
                    <span className="text-[white]"> |</span>
                    <span className="text-[white]">{MyTravellingData[2].occupation}</span>
                  </div>
                </div>
                <div className="flex justify-start items-start gap-2 mt-[15px]">
                  <img src={MyTravellingData[2].profile_picture} alt="" />
                  <p className="text-[14px] text-[white] text-left w-full">
                    {MyTravellingData[2].description.substring(0, 70)}....{" "}
                    <small className="text-xs text-[grey] cursor-pointer"><Link to='/blogTwo'>read more</Link></small>
                  </p>
                </div>
                <hr className="my-[30px] bg-[#767F86] h-[1px]" />

                <div className="flex justify-between items-center mb-[10px]">
                  {MyTravellingData[2].availability === true ? (
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
        </div>
      </div>
    </div>
  );
};

export default TravellingData;
