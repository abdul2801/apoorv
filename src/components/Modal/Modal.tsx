import React, { ReactElement, useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  setIsOpen,
  data
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data : any
}): ReactElement => {
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleOutsideClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (
        isOpen &&
        (event.target as HTMLElement).classList.contains("modal-overlay")
      ) {
        closeModal();
      }
    };
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    document.addEventListener(
      "click",
      handleOutsideClick as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick as unknown as EventListener
      );
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    // check if the flag is correct
    // if correct, add correct class to input
    // else change input color to red
    
    let input = document.querySelector(".flag-inp") as HTMLInputElement;
    if(input === null) return;
    // remove both class when lost focus
    input.addEventListener("focus", () => {
      input.classList.remove("inp_wrong");
      input.classList.remove("inp_correct");
    });
    
    if(input.value !== data.challenge_flag) {
      input.classList.add("inp_wrong");
      return;
    }
    if(input.value === data.challenge_flag) {
      input.classList.add("inp_correct");
    }



   

    
   

    // close the modal
    // closeModal();
  };

  function hintClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    hint: string
  ): void {
    let desch = document.querySelector(".hint-desc");
    if (desch === null) return;
    desch.textContent = hint;
  }

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="close fa fa-times" onClick={closeModal}></div>
            <h2
              style={{
                color: "white",
                textAlign: "center",
                letterSpacing: "1.3px",
                textTransform: "capitalize",
              }}
            >
              {data.challenge_title}
            </h2>
            <div className="line" />

            <div className="outer-cont">
              <div>
                <div className="tags-cont">
                  {/* <div className='t-heading'>Tags :</div> */}
                  <div className="tags">
                  <div className="tag" style={{ marginRight: "20px" }}>
                    {data.event_name}
                      </div>
                    {data.tags.map((tag : any) => (
                      <div className="tag" style={{ marginRight: "20px" }}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="desc">
                  <p>{data.challenge_body}</p>
                </div>
              </div>
              <div className="hints-cont">
                <h3>Hints</h3>
                <div className="hints">
                  {data.hint_text.map((hint : any) => (
                    <div className="hint" onClick={(e) => hintClick(e, hint)}>
                      <button className="custom-btn btn-1">1</button>
                    </div>
                  ))}
                </div>
                <div className="hint-desc">
                  <p>Click to view the hints</p>
                </div>
              </div>
            </div>
            <div className="attachments">
            
              {data.files &&
                data.files.map((f : any) => {
                  return (
                    <button className="button">
                      <i className="fa fa-file"></i>
                      <a href={f.file_url} className="lable">{f.file_name}</a>
                    </button>
                  );
                })}
            </div>
            <div className="line" />
            <form onSubmit={handleSubmit}>
              <input
                className="flag-inp"
                type="text"
                placeholder="Enter the flag"
              />

              <button className="custom-btn btn-10" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
