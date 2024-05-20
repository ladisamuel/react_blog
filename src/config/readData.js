
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../config/firebaseBackEnd'

export const callNews = async ({setData}) => {

    let allData = []
    const db_data = await getDocs(collection(db, "news"));
    db_data.forEach((doc) => {
      const eachData = {
        id : doc.id,
        ...doc.data()
      }

      allData.push(eachData)
      
    });
    setData(allData)
  }

