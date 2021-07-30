import React from 'react';
import '../../assets/sass/listSkill.scss';
import loadable from '@loadable/component'
// import SkillBar from 'react-skills-bars';

const SkillBar = loadable(() => import ('react-skills-bars'));

const ListSkill = (props) => {

  const {skills , colors} = props;
  console.log(props)

  return (
    <div className="list-skill">
      <SkillBar skills={skills} animationDelay={0} animationDuration={1500} colors={colors}/>
    </div>  
    
  );
}
 
export default ListSkill;
