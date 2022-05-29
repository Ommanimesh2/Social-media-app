
import { db } from "../firebaseConfig";
import { query,collection,where,getDocs } from "firebase/firestore";
export const fetchUserName = async ({setUserData,user}) => {

    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data()
    setUserData(data)
  };