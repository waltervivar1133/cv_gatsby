import React from 'react';
import Menu from '../components/Menu/Menu'
const BasicLayout = (props) => {
  console.log(props);
  const {children,menuColor} = props

  return ( 
    <>
        <Menu menuColor={menuColor}/>
        {children}
    </>

   );
}
 
export default BasicLayout;