import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import BlogComponent from "./BlogComponent";
import { callNews } from "../config/readData";


const HomePage = () => {
  
  const [data, setData] = useState([])
  const navigate = useNavigate()
  //  localStorage.setItem('myData', JSON.stringify(updatedData));

  const goto = (id) => {
    navigate
  }

  
  useEffect(()=>{
    callNews({setData})

   }, [])

  return (
    <div>
      <Header />


      <div className="bg-[#2d2d2d] px-[200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-5 mb-11 text-white py-10">
              {data.map((item, index)=>(
                <BlogComponent 
                  key={index}
                  item={item}
                  setData={setData}
                />
              
              ))
              }
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
