import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
        className="flex justify-between items-center py-5 px-[200px] bg-[#121111] text-[white]"
        style={{ position: "sticky", top: 0, zIndex: 2000 }}
      >
        <div>
          <h1 className="font-medium">Product</h1>
        </div>

        <ul className="flex items-center justify-between gap-[40px]">
          <Link to="/">
            <li className="cursor-pointer text-xs hover:text-[#F7B405] hover:border py-2 px-4 rounded-lg border-[#e0e0e0] font-medium transition duration-150 ease-out hover:ease-in">
              HOME
            </li>
          </Link>
          <Link to="myform">
            <li className="text-xs hover:text-[#F7B405] hover:border py-2 px-4 rounded-lg border-[#e0e0e0] cursor-pointer transition duration-150 ease-out hover:ease-in font-medium">
              Add New Item
            </li>
          </Link>
        </ul>
      </div>
  )
}
