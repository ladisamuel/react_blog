import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { collection, doc, setDoc, addDoc  } from "firebase/firestore"; 
import { db } from '../config/firebaseBackEnd'
import { toast } from "react-toastify";

const MyForm = () => {

  // create an array of at least 5 states and capital in Nigeria
  // Write a program that collects user input between 1 - 4
  // 1 - Display all state and capital in the array
  // 2 - Add new state and capital to the array
  // 3 - Edit a particular state and it capital
  // 4 - Delet a particular state and it capital

  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')


  const [formData, setFormData] = useState([])
  const navigate = useNavigate()

  const bindAuthor = (e) => {
    const Author_field = e.target.value
    setAuthor(Author_field)
  }
  const bindContent = (e) => {
    const Content_field = e.target.value
    setContent(Content_field)
  }
  const bindTitle = (e) => {
    const Title_field = e.target.value
    setTitle(Title_field)
  }

  const handleSubmit = async () => {
    
    const docRef = await addDoc(collection(db, "news"), {
        author : author,
        content : content,
        title : title,
      });

      toast.success("News Item Added Successfully")

    navigate('/')
  }

  useEffect(()=>{

   }, [])




  return (

    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">

      <div>      

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add News Item
        </h2>
      </div>

      <div className="space-y-8">
        {/* <div action="" method='' className="mt-8 space-y-6"> */}
        <div className="mt-8 space-y-6">
          <div className="rounded-sm shadow-sm -space-y-px">


          <div className="my-5">
              <label htmlFor="email" className="sr-only">
                Author
              </label>
              <input
                name="author"
                type="text"
                
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Author"
                value={author}
                // onChange={(e) => setSubject(e.target.value)}
                onChange={bindAuthor}
              />
          </div>
          <div className="my-5">
            <label htmlFor="email" className="sr-only">
              Title
            </label>
            <input
              name="title"
              type="text"
              
              className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Title"
              value={title}
              // onChange={(e) => setSubject(e.target.value)}
              onChange={bindTitle}
            />
          </div>
          <br />

            <div className="my-5">
              <label htmlFor="message" className="sr-only">
                Content
              </label>
              <textarea
                id="message"
                name="content"
                
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message"
                value={content}
                // onChange={(e) => setMessage(e.target.value)}
                onChange={bindContent}
              />
            </div>
            <br />
            <div>
                <input 
                  type='submit'
                  value='Submit'
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              
                 
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
