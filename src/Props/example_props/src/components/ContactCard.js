import React from 'react'

function ContactCard(props) {
  const {contact} = props
  
  return (
    <div className="contact-card">
      <img src={contact.imgUrl} alt="img"/>
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  )
}

export default ContactCard



