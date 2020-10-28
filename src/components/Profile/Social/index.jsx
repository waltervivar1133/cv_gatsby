import React from 'react'
import '../../../assets/sass/social.scss';
import {ReactComponent  as IconGithub} from "../../../images/icons/twitter.svg";
import {ReactComponent  as IconLinkedind} from "../../../images/icons/linkedin.svg";

const dataSocial = [
  {
    url: "https://waltervivar1133.github.io/cv/",
    icon : <IconGithub/>
  },
  {
    url: "https://waltervivar1133.github.io/cv/",
    icon : <IconLinkedind/>
  }
];


const Social = () => {
  return ( 
    <div className="social" >

      {
        dataSocial.map( (item , key) => (
          <a href={item.url} key ={key} target="_blank" rel="noreferrer noopener ">
          {item.icon}
        </a>
        ))
      }

     
      
    </div>
   );
}
 
export default Social;