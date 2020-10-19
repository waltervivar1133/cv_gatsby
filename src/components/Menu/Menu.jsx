import React from 'react'
import '../../assets/sass/menu.scss'
import {Link} from  'gatsby';
import {Container} from 'react-bootstrap';

const Menu = (props) => {

  console.log(props)
  return (
      <header className="menu">
        <Container>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li> 
            <li>
              <Link to="/skill">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
          </ul>
        </Container>
      </header>
    );
}
 
export default Menu;