import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
const [category,setcategory]=useState('All')


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
    </div>
  )
}

export default Home
