import React from "react"
import '../assets/sass/index.scss'
import Layout from '../layouts/BasicLayout';
import Profile from '../components/Profile/Profile';
import About from '../components/AboutMe/About.jsx';



const IndexPage = () => (
  
  <Layout menuColor="transparent">
    <Profile/>
    <About/>
 </Layout>
)

export default IndexPage
