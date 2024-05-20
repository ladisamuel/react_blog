import React, { useEffect } from 'react'
import IMG from '../assets/e1.jpg'
import { useNavigate } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../config/firebaseBackEnd';
import { callNews } from '../config/readData';
import { ToastContainer, toast } from 'react-toastify';

export default function BlogComponent( {item, setData} ) {
  const navigate = useNavigate()
      
  const delItem = async (id) => {

    await deleteDoc(doc(db, "news", id));
    callNews({setData})
    toast.warning("News Item Delete Successfully!!")

    }
    
   const editItem = (id) => {
     navigate(`/edit_item/${id}`)
   }

   const goToBlog = (id) => {
    navigate(`/blog_page/${id}`)
   }

   useEffect(()=>{
    },[])
  
    return (
    <div>
        <div onClick={()=>(goToBlog(item.id))} className="bg-[#1b1b1b]  hover:cursor-pointer hover:border-2 border-[#525252]  rounded-md overflow-hidden">
                {item.urlToImage ?
                <img src={item.urlToImage} alt="myimage" className="w-[100%]" />
                : 
                <img src={IMG} alt="myimage" className="w-[100%]" />
                }
                
                <div className="px-[20px] py-[10px]">
                  <h1 className="text-[18px] font-semibold text-[white]">
                  {item.title}
                  </h1>
                  <div className="flex justify-start items-start gap-2 mt-[15px]">
                    <p className="text-[14px] text-[white] text-left w-full">
                      {item.description}.....{" "}
                      <small className="text-xs text-[grey] cursor-pointer">
                      read more
                      </small>
                    </p>
                  </div>
                  <hr className="my-[30px] bg-[#767F86] h-[1px]" />

                  <div className="flex justify-between items-center mb-[10px]">
                    <p>{item.author ? item.author : 'Unknown'}</p>
                    
                    <div className="flex justify-between items-center gap-5 ">
                      <i onClick={()=>(delItem(item.id))} className="pi pi-trash bg-[#550000] p-2 rounded-full text-xs cursor-pointer"></i>
                      <i onClick={()=>(editItem(item.id))} className="pi pi-pencil bg-[#000055] p-2 rounded-full text-xs cursor-pointer"></i>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
