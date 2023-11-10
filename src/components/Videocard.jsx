import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../services/allAPI';

function Videocard({view,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleShow =async() => {setShow(true);
  const {caption,embedlink}=view
  let today=new Date()
  //Intl.DateTimeFormat object enables language-sensitive date and time formatting.
  console.log(today);
  let timestamp=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timestamp);

  let vdetails={
    caption,embedlink,timestamp
  }
   await addHistory(vdetails)

  }
  const handleClose = () => setShow(false);

  const removeVideo=async(id)=>{
    const response =await deleteVideo(id)
    setDeleteVideoStatus(true)
  }

  //function to drag the videocard

  const cardDrag =async(e,id)=>{
    console.log(`the id of the videoCARD dragged is ${id}`);
    e.dataTransfer.setData("videoID",id)
}
 
  return (
    
    <>
      <div className='ms-5 mb-3'>
      <Card style={{ width: '100%',height:'300px' }} draggable onDragStart={(e)=>cardDrag(e,view?.id)} >
        <Card.Img height={'280px'} onClick={handleShow} variant="top" src={view.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
              <h6>{view.caption}</h6>
          </Card.Title>
          <Button className='btn btn-danger d-flex' onClick={()=>removeVideo(view?.id)}><i class="fa-solid fa-trash-can"></i></Button>
        </Card.Body>
      </Card>
      
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{view.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="523" src={`${view.embedlink}?autoplay=1`} title={view.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
    
  )
}

export default Videocard
