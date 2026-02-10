import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function ContactModal({closeModal}) {

  const groomContact = [
    { person: "신랑 이승준", phone: "01080334137" },
    { person: "어머니 신민화", phone: "01033724135" },
  ];

  const brideContact = [
    { person: "신부 윤희진", phone: "01099732684" },
    { person: "아버지 윤영규", phone: "01035461865" },
    { person: "어머니 이정희", phone: "01025371865" },
  ];


  return (
    <div className="modal">
      <div className="contact__content">
        <button onClick={closeModal} className="survey__btn-close">&times;</button>
        <div className='modal__account'>연락하기</div>
        <div className="contact__boxes">
          {[...groomContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                  <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact__boxes">
        {[...brideContact].map((contact, index) => (
            <div key={index} className="contact__box">
              <span>{contact.person}</span>
              <div className="contact__icons">
                <a href={`tel:${contact.phone}`}>
                    <BsFillTelephoneFill size="1em" className='contact__icon-phone'/>
                </a>
                <a href={`sms:${contact.phone}`}>
                  <HiMail size="1.5em"/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
