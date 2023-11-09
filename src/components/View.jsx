import React, { useEffect, useState } from 'react'
import VideoCard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadvideoStatus}) {
  const [allVideo,setAllVideos]=useState([])

  const [deleteVideoStatus,setDeleteVideoStatus]=useState({})

  const getAllUploadedVideos =async()=>{
   const response=await getAllVideos()
      // console.log(response);
      const{data}=response
      // console.log(data);
      setAllVideos(data)
  }

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadvideoStatus,deleteVideoStatus])
  return (
    <>
 <Row>
  { allVideo.length>0?
  allVideo.map((video)=>(
    <Col sm={12} md={6} lg={4} xl={3}>
    <VideoCard view={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
    </Col>))
  :<p className='mt-5 fw-bolder fs-4 text-danger text-center'>Nothing to display</p>}
   
 </Row>


    </>
  )
}

export default View