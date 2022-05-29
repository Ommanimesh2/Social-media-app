import { db } from "../firebaseConfig";
import { doc, limit, limitToLast, orderBy, updateDoc } from "firebase/firestore";
import {addDoc } from "firebase/firestore";
import { getFormattedDateTime } from "../../utils/dateTimeFormat";
import { collection, query, onSnapshot } from "firebase/firestore";
import { ref } from "firebase/storage";


async function postUpload(name,reference,genres){
   try {
       
       const doing =await addDoc(collection(db, "posts"), {
        name:name,
        time:getFormattedDateTime(new Date()),
        likes:0,
        dislikes:0,
        reference:reference,
        genres:genres,
        itselfId:"",
 

        
    });
 const ref=doc(db,"posts",doing.id)
 await updateDoc(ref,{
     itselfId:doing.id
    })
    console.log(ref);
  alert("post created")
} catch (error) {
    console.log("cannot add that")
}
}

export default postUpload
export async function getPostData(arr){
    try {
     const querySnapshot = query(collection(db, "posts"),orderBy("name"), limit(3));
     const snap=onSnapshot(querySnapshot,(q)=>{
       
       q.forEach((doc) => {
         console.log(doc.id);         
         arr.push(doc.data())
         
       });
     })
   
    } catch (error) {
      console.log(error)
    }
 }