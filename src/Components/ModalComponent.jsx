import React from 'react'
import DataModal from "../Data/DataModal.json";


const ModalComponent = () => {
  return (
    <>
    {modalIsTrue && (
        <div className="modal">
           <button onClick={() => handleModal()}>X</button>
          <h1>Frapucha Coffee</h1>
          <p></p>
         
        </div>
      )}
    </>
  )
}

export default ModalComponent
