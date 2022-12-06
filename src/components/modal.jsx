const Modal = ({children, isOpen, setIsOpen, closeButton = true }) => {

  if (!isOpen) return null; 

  return (
  <div className="backdrop">
    <div className="modal">
     {closeButton? <button type="button" className="modal-close" 
      onClick={()=>setIsOpen(false)} /> :null}
      
      {children}</div>

   </div>

  
)}

export default Modal