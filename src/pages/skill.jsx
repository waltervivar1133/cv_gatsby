import React from "react"
import {Button , Container} from 'react-bootstrap';
import '../assets/sass/skills.scss'
import Layout from '../layouts/BasicLayout';
import ListSkill from '../components/ListSkill/Skills';
import {skillsFrontEnd, skillsFrontEndColor} from '../utils/skills';

const Skill = () => (
  
  <Layout menuColor = "#0098d3">
    <Container class="skills">
      <div className="skills__block">
        <h2>Hola</h2>
        <ListSkill  skills={skillsFrontEnd}  colors = {skillsFrontEndColor}/>
      </div>
    </Container>
   
 </Layout>
)

export default Skill
