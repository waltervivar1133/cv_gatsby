import React from "react"
import {Button, Container , Row , Col , Card} from 'react-bootstrap';
import '../assets/sass/projects.scss'
import Layout from '../layouts/BasicLayout';
import Datos from '../utils/project'



const Projects = () => (
  
  <Layout menuColor="#000">
    <Container className="projects">
      <h1>Proyectos</h1>
      <Row>
        { Datos.map((item , index) => (
          <Col key={index} xs={12} sm={4} className="project">
            <Card>
        <div className="image"
          style={{ backgroundImage: `url("${item.image}")`}}
        />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <a href={item.url} target="_blank">
                  <Button primary >
                    Web
                  </Button>
                </a>
              </Card.Body>
              </Card>
          </Col>
        ))
        
        }
       
      </Row>
    </Container>
 </Layout>
)

export default Projects
