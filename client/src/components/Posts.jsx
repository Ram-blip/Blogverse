import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem';
import { DUMMY_POSTS } from '../data';
import Loader from '../components/Loader'


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
        setPosts(response?.data)
      } catch(err) {
        console.log(err)
      }
      setIsLoading(false)
    }


    fetchPosts();
  }, [])

  if(isloading){ 
    return <Loader/>
  }

  return (
    <section className='posts'>
      {posts.length > 0 ? <div className="container posts__container">
      {
        posts.map(({_id:id, thumbnail, category, title, description, creator, createdAt}) => 
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt}/>)
      }
      </div> : <h2 className='center'>No post found</h2>}
    </section>
  )
}

export default Posts 