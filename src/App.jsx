import { useState } from "react"
import Modal from "./components/modal"

function App() {
  const [modalOpen, setModalOpen] = useState(false)

return (
  <div className="page">
   <Modal isOpen={modalOpen} setisOpen={setModalOpen} /> 


    <div>
    
      <button onClick={() => {setModalOpen(true)}}> 
        Open Modal
      </button>
    </div>


  </div>

  )
}

export default App
