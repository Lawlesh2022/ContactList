import React from 'react'
import userimg from '../images/userimg.png'

const ContactCard = (props) => {
    const {id, name, email, phone} = props.contact;
  return (
    <div className = "item">
        <img className = "ui avatar image" src = {userimg} alt = "userimg"/>
                <div className = "content">
                    <div className = "header">{name}</div>
                    <div>{email}</div> 
                    <div>{phone}</div>                                        
                </div>
                <i className = "trash alternate outline icon" 
                style = {{color: "red", marginTop: "7px", float: "right", cursor: "pointer"}}
                onClick = {()=> props.clickHandler(id)}></i>
            </div>
  )
}

export default ContactCard