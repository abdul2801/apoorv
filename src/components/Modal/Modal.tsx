import React, { ReactElement, useEffect, useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }): ReactElement => {
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isOpen && (event.target as HTMLElement).classList.contains('modal-overlay')) {
        closeModal();
      }
    };
    if(isOpen) {
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    
    }

    document.addEventListener('click', handleOutsideClick as unknown as EventListener);

    return () => {
      document.removeEventListener('click', handleOutsideClick as unknown as EventListener);
    };
}, [isOpen, closeModal]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close fa fa-times" onClick={closeModal}></div>
            <h2 style={{color : "white" ,textAlign : "center" , letterSpacing : "1.3px"}}>Modal Heading </h2>
            <div className='line'/>

            <div className='outer-cont'>
            <div>
            <div className='tags-cont'>
              {/* <div className='t-heading'>Tags :</div> */}
              <div className='tags'><div>Tag 1</div></div>
              <div className='tags'><div>Tag 2</div></div>
              <div className='tags'><div>Tag 3</div></div>
              

            </div>
            <div className='desc'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores temporibus eaque blanditiis nihil rem excepturi exercitationem voluptates magni nemo rerum.</p>
            </div>
            </div>
            <div className='hints-cont'>
              <h3>Hints</h3>
              <div className='hints'>
                <div className='hint'><button className='custom-btn btn-1'>1</button></div>
                <div className='hint'><button className='custom-btn btn-1'>1</button></div>
                <div className='hint'><button className='custom-btn btn-1'>1</button></div>
              </div>
              <div className='hint-desc'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati suscipit maiores quo veritatis autem delectus, ipsum porro qui. Enim, quis.
                
                </div>

              </div>
            </div>
            <div className='attachments'>
              <button className='button'><i className="fa fa-file"></i><span className='lable'>Attachment 1</span></button>
              <button className='button'><i className="fa fa-file"></i><span className='lable'>Attachment 2</span></button>
              <button className='button'><i className="fa fa-file"></i><span className='lable'>Attachment 3</span></button>
              </div>
            <div className='line'/>
            <form onSubmit={handleSubmit}>
              <input className='flag-inp' type="text" placeholder="Enter the flag" />

              <button className='custom-btn btn-10' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
