import React from 'react';
import { Container , Button} from 'react-bootstrap';
import '../../assets/sass/about.scss'
import CV from '../../images/CV.pdf';
const About = () => {
  return ( 
  <Container className="about-me">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto velit, eos error architecto blanditiis quis at reprehenderit maxime atque ex consequuntur culpa necessitatibus, consequatur ducimus optio nostrum possimus? Voluptatem?</p>
      <a href={CV} target="_blank">
        <Button className="button">
            Descargar Cv
        </Button>
      </a>
     
  </Container> );
}
 
export default About;