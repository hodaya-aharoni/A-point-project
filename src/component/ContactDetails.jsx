import React from 'react';
import { useSelector } from 'react-redux';

const ContactDetails = () => {
    let contacts = useSelector(state=>state.contact.currentContact);
  return (
    
    <div className="contact-details">
      <div className="header">
        <span className="main-contact">Main contact</span>
        <span className="edit">Edit</span>
      </div>
      <div className="photo">
     
      </div>
      <div className="details">
        <div className={contacts.name}>{contacts.name}</div>
        <div className={contacts.role}>{contacts.role}</div>
        <div className={contacts.contactType}>{contacts.contactType}</div>
        <div className="preferred-language">{contacts.preferredLanguage}</div>
        <div className={contacts.phone}>{contacts.phone}</div>
        <div className={contacts.email}>{contacts.email}</div>
        <div className={contacts.address}>{contacts.address}</div>
        <div className="invoice-name">{contacts.invoiceName}</div>
        <div className="accounting-ref">{contacts.accountingRef}</div>
        <div className="vat-number">{contacts.vatNumber}</div>
      </div>
    </div>
  );
};

export default ContactDetails;

