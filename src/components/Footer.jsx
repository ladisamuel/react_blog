import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[200px] ">
        <p className="text-[#A5ADB3]">
          ©Copyright. Designed And Developed By Themesine
        </p>
        <ul className="">
          <li className="pi pi-phone p-[10px] text-[#A5ADB3] hover:text-[red] transition duration-150 ease-out hover:ease-in">
            {" "}
            +1 (222) 777 8888
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
