import React from 'react';
import PropTypes from'prop-types';

const ProfileComponent=(props)=>{
    const handleName= props.FullName ?(alert(props.FullName)):(alert('unknowing'));
    
    return(
    <div style={{ fontFamily:'sans-serif',fontSize:'bold ', backgroundColor:'LightBlue', width:'500px', padding:'10px',margin:'10px auto'}}>
         {handleName}
        <p>{ props.children}</p>
         <p> Name : {props.FullName}</p>
        <p> Profession :{props.profession}</p>
        <p> About : {props.bio}</p>
    </div>)
}
export default ProfileComponent;

ProfileComponent.defaultProps={
    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
}
ProfileComponent.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
   };