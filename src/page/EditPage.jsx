import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Header from "../components/Header";

const MyForm = () => {
  
  const params = useParams();

  const [data, setData] = useState({})
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  
  
  const [formData, setFormData] = useState([])

  const bindSubject = (e) => {
    const subjField = e.target.value
    setSubject(subjField)
  }
  const bindMessage = (e) => {
    const mesField = e.target.value
    setMessage(mesField)
  }

  const handleSubmit = () => {
    const data = {
      subj:subject,
      mes: message
    }

    const allData = [...formData, data]
    localStorage.setItem("course", JSON.stringify(allData))

      // console.log(formData);

    setFormData(allData)
    setSubject('')
    setMessage('')

  }
  


 useEffect(()=>{

   }, [])





  return (

    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <Header />

      <div>      

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Edit Item Here
        </h2>
      </div>

      <div className="space-y-8">
        <div className="mt-8 space-y-6">
          <div className="rounded-sm shadow-sm -space-y-px">


            <div className="my-5">
              <label htmlFor="email" className="sr-only">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Subject"
                value={subject}
                // onChange={(e) => setSubject(e.target.value)}
                onChange={bindSubject}
              />
            </div>

            <div className="my-5">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message"
                value={message}
                // onChange={(e) => setMessage(e.target.value)}
                onChange={bindMessage}
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
