import React from 'react';
import '../../assets/sass/profile.scss';
import { Container , Row , Col , Image} from 'react-bootstrap';
import profileImage from '../../images/profile.jpg'; 
import Social from './Social/index'


const data = [
   {
     title: "Edad",
     info : "23"
   },
   {
    title: "Informacion",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam fugiat consequuntur nam! Eos doloremque sit animi recusandae facilis perferendis nostrum corrupti, quam, ut repellat amet repudiandae minus fugit asperiores." 
   }
]

const Profile = () => {
  return (
    <div className="profile">
      <div className="wallpaper">
        <div className="dark"/>
      </div>
        <Container className="box">
          <Row className="info">
            <Col xs={12} md = {4}>
              <Image src={profileImage} fluid/>
            </Col>
            <Col xs={12} md = {8} className="info__data">
                <span>Hola Soy Walter</span>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel ea nemo voluptatem, earum saepe, provident vero, tenetur voluptate incidunt sequi quisquam? Reiciendis ex esse fuga quos? Eveniet, id earum.</p>
                <hr/>
                <div className="more-info">
                  {/* <div className="item">
                    <p>Telefono</p>
                    <p>980 717 587</p>
                  </div> */}
                  {
                    data.map( (item , key) => (
                    <div className="item">
                      <p>{item.title}</p>
                      <p>{item.info}</p>
                    </div>
                    ))
                  }
                </div>
            </Col>
          </Row>
          <Social/>
        </Container>
      
    </div>
   );
}
 
export default Profile;