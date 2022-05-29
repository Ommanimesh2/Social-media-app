import { updateDoc,doc, getDoc, addDoc, getDocs, collectionGroup } from "firebase/firestore"
 import {db} from './firebaseConfig'
import { collection } from "firebase/firestore"
import { query,where } from "firebase/firestore"

export async function likeUpdater(id,user,e,setlike,lik){
  e.target.innerHTML="❤️"
  setTimeout(() => {
    e.target.innerHTML="like"
    
  }, 2000);
  try{

    const likeExists= query(collectionGroup(db,"likePeople"), where("people","==",user))
    const thing=await getDocs(likeExists)
    console.log(thing);
  let arr=[]
    thing.forEach((doc) => {
      arr.push(doc.data())
    });
    console.log(arr);
  if(arr.length===0){
    
    const ref=doc(db,"posts",id)
    
    const subref=collection(ref,"likePeople")
      await addDoc(subref,{
          people:user
        }) 
    const hut=await getDoc(ref)
    const prevlike=hut.data().likes
    await updateDoc(ref,{
      likes:prevlike+1,
      
    })
    setlike(lik + 1)
  }    
  else{
      alert("You Have already liked this post")
  }
} catch (error) {
    console.log(error)
}

}

export async function dislikeUpdater(id,user,e,setDislik,dislik){
  e.target.innerHTML="🤢"
  console.log(user)
  setTimeout(() => {
      e.target.innerHTML="Dislike"
      
    }, 2000);
    try{
        const dislikeExists= query(collectionGroup(db,"dislikePeople"), where("people","==",user))
        console.log(dislikeExists);
        const thing=await getDocs(dislikeExists)
      let arr=[]
        thing.forEach((doc) => {
          arr.push(doc.data())
        });
        console.log(arr);
        if(arr.length===0){

          const ref=doc(db,"posts",id)
          const subref=collection(ref,"dislikePeople")
          await addDoc(subref,{
            people:user
          })
          
          const hut=await getDoc(ref)
          const prevdislike=hut.data().dislikes
          await updateDoc(ref,{
            dislikes:prevdislike+1,
          })
          setDislik(prevdislike+1)
        }else{
          alert("You have already disliked this post!")
        }
 
} catch (error) {
   console.log(error);
}

    }