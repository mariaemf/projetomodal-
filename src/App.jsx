import { useState } from "react"
import Modal from "./components/modal"

const setup = 'https://images.unsplash.com/photo-1549834146-0702b38f1bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bg, setBG] = useState (`url(${setup})`);

return (
  <div className="page" style={{'--bg-image':bg}}>
   <Modal isOpen={modalOpen} setisOpen={setModalOpen} >
    <div>
    <h1>Maria Freitas Dev</h1>  
    </div> 

   </Modal>
    <div>
    
      <button onClick={() => {setModalOpen(true)}}> 
        Open Modal
      </button>
    </div>


  </div>

  )
}

export default App
