import React, {useState} from 'react'
// import flower from '../images/flower.png'
// import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa6";
import Modal from '../components/Modal';
import '../css/Modal.css'

function ContactButton({ person, account, kakaopay }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <div className="contact__box">
          <span>{person}</span>
          <div className="contact__icons">
            <button onClick={openModal} className="contact__btn"><FaMoneyCheck size="1.5em"/></button>
          </div>
        </div>
        {isModalOpen && (
          <Modal closeModal={closeModal} who={person} account={account} kakaopay={kakaopay}/>
        )}
      </>
    );
  }


  function Account() {
    const groom_contact = [
      { person: "신랑 이승준", account: "우리은행 1002-256-544816" },
      { person: "어머니 신민화", account: "농협 622-910075-43007" },
    ];

    const bride_contact = [
        { person: "신부 윤희진", account: "농협 302-9973-2684-91" },
        { person: "아버지 윤영규", account: "우리은행 706-07-084233" },
        { person: "어머니 이정희", account: "농협 752-12-026234" },
      ];
  
    return (
      <div className="container">
        {/* <img src={flower} className="flower" alt="flower"/> */}
        <div className='contact__title'>마음 전하는 곳</div>
        <div className="contact__boxes">
          {groom_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account}/>
          ))}
        </div>
        <div className="contact__boxes">
          {bride_contact.map((contact, index) => (
            <ContactButton key={index} person={contact.person} account={contact.account}/>
          ))}
        </div>
        <div className="contact__guide-text">아이콘을 클릭하시면 계좌번호를 확인할 수 있습니다.</div>
      </div>
    );
  }

 

export default Account
