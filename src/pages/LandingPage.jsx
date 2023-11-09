import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row>
    <Col></Col>
    <Col lg={5}>
      <h2 className='mt-5'>Welcome to<span className='text-warning'> Media Player</span></h2>
      <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet quis enim, consectetur dolore doloribus atque porro cum nihil deserunt veritatis debitis magni iure ratione. Asperiores dignissimos sit maiores voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui ea deserunt dignissimos repellendus incidunt veritatis ut ad nemo atque quia nihil fugit similique expedita inventore reprehenderit, id impedit doloribus.</p>
      <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right mt-2"></i></button>
    </Col>
    <Col></Col>
    <Col lg={5}>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
    </Col>


    </Row>
    
    <div className='container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column'>
      <h3 className='mb-5'>Features</h3>
      <div className='cards d-flex justify-content-evenly align-items-center w-100 mb-5'>
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:"100%",height:"300px"}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>



    <div className="container border border-2 rounded border-secondary p-5 mt-5 mb-5">
    <Row>
      <Col></Col>
      <Col lg={5}>
        <h3 className='text-warning'>Simple Fast and Powerful</h3>
        <p><span className='fs-5 fw-bolder'>Lorem ipsum dolor :</span> sit amet consectetur adipisicing elit. Saepe, sit facilis rerum expedita sunt dicta unde tempore blanditiis facere vitae dignissimos excepturi voluptas quos iusto adipisci incidunt eum voluptate. Eaque!</p>
        <p><span className='fs-5 fw-bolder'>Lorem ipsum dolor :</span> sit amet consectetur adipisicing elit. Saepe, sit facilis rerum expedita sunt dicta unde tempore blanditiis facere vitae dignissimos excepturi voluptas quos iusto adipisci incidunt eum voluptate. Eaque!</p>
        <p><span className='fs-5 fw-bolder'>Lorem ipsum dolor :</span> sit amet consectetur adipisicing elit. Saepe, sit facilis rerum expedita sunt dicta unde tempore blanditiis facere vitae dignissimos excepturi voluptas quos iusto adipisci incidunt eum voluptate. Eaque!</p>
      </Col>
      <Col></Col>
      <Col lg={6}>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default LandingPage