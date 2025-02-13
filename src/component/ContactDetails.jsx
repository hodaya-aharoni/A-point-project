
import React from 'react';
import { useSelector } from 'react-redux';
import '../style/ContactDetails.css'
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import Flag from 'react-world-flags'; 

const ContactDetails = () => {
  const contact = useSelector(state => state.contact.currentContact);

  if (!contact) return <div>No contact selected</div>;

  return (
    <div className="contact-details">
      <div className="photo-container">
        <div className="photo-placeholder">
          <Face6OutlinedIcon className="face-icon" />
        </div>
      </div>
      <div className="edit"><EditIcon className="icon" /> Edit</div>
      <div className="header">
        <h3>Contact Details</h3>
        <div className="main-contact"> <StarIcon className="icon" /> Main contact</div>

      </div>
      <div className="contact-info">
        <div className="contact-row">
          <div className="contact-field"><span>Name</span> {contact.firstName +" "+ contact.lastName}</div>
          <div className="contact-field"><span>Role</span> {contact.role}</div>
          <div className="contact-field"><span>Contact Type</span> {contact.contactType}</div>
        </div>

        <div className="contact-field"><span>Preferred Language</span> {contact.preferredLanguage} {contact.preferredLanguage}</div>
        <div className="contact-field"><span>Phone</span> {contact.phones[0]?.number}</div>
        <div className="contact-field"><span>Email</span> {contact.emails[0]?.address}</div>
        <div className="contact-field"><span>Address</span> {contact.address}</div>
        <div className="contact-field"><span>Invoice Name</span> {contact.address}</div>
        <div className="contact-field"><span>Accounting Ref</span> {contact.accountingRef}</div>
        
      </div>
    </div>
  );
};

export default ContactDetails;



