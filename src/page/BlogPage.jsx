import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import Header from '../components/Header'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom/dist';
import { db } from '../config/firebaseBackEnd';

const BlogPage = ( ) => {
  const params = useParams();
  console.log(params.id)

  const [data, setData] = useState({})
const getADoc = async () => {
  const docRef = doc(db, "news", params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    setData(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }
}

useEffect(()=>{
    getADoc()
  }, [])

  return (
    <div>
      <Header />
      <Blog 
        item={data}
      />
    </div>
  )
}

export default BlogPage
