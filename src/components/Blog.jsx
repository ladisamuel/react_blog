import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = ( {item} ) => {
  const [blog, setBlog] = useState({})
  const params = useParams();


   

 useEffect(()=>{

   }, [])


  return (
    <div>
      <div className="items-center justify-center gap-5 px-[200px] mb-11 bg-[#121111] text-white py-10">
          <div>
            <div className="w-[80%] rounded-[20px] flex items-start">
              
              <div>
                <h1 className="text-[30px] font-semibold text-[white] px-5">
                  {item.title}
                </h1>
              </div>
            </div>
            <div className="">
              <div className="mt-[15px]">
                <p className="text-[14px] text-[white] text-left w-full">
                  Content
                  {item.content}....
                </p>
              </div>
              <hr className="my-[30px] bg-[#767F86] h-[1px]" />

              <div className="flex items-center justify-between py-6">
                <p>{item.author }</p>
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
      </div>
    </div>
  );
};

export default Blog;
