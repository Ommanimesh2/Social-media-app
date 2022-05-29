import React from 'react'
import PostUpload from '../PostUpload/PostUpload';
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from '../Navbar/Navbar';
import { auth } from '../../firebase/firebaseConfig';
import { useState } from 'react';
import { useEffect } from 'react';
import { getIntersectingPosts } from '../../firebase/dataFetchFunctions/getIntersectingPosts';
import ShowPosts from '../showPosts/ShowPosts';
import { getPostData } from '../../firebase/PostUploadfunc/postupload';
import { fetchUserName } from '../../firebase/dataFetchFunctions/fetchUserName';

const Homepage = () => {
  const [user, loading, error] = useAuthState(auth)
  // const [load, setLoad] = useState(true)
  const [userData, setUserData] = useState([])
  const [allPosts, setAllPosts] = useState([])

  const [upload, setupload] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
  }



  useEffect(() => {
    fetchUserName({ setUserData, user })
  }, [user]);
  useEffect(() => {
    let give = []
    getPostData(give)
    setAllPosts(give)
  }, [loading])
  console.log(userData)
  console.log(allPosts);
  const thisArr = []
  getIntersectingPosts(userData, allPosts, thisArr)
  console.log(thisArr);

  return loading ? <h1>Loading...</h1> : (

    <>

      <Navbar name={userData.displayName} imgURL={userData.photoURL} email={userData.email} />
      <button onClick={() => {
        setupload(true)
      }}>Upload</button>
      <PostUpload on={upload} user={userData} setOn={setupload} />
      {thisArr.map((item) => {
        return <ShowPosts item={item} user={userData.uid} />
      })}
    </>
  )
}

export default Homepage
