import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer' ;  
import Preview from '../components/Preview';
import { getResumeAPI } from '../services/allAPI';
import { useParams } from 'react-router-dom';

function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const [resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    console.log(result);
    if(result.status==200){
      setResume(result.data)
    }
    
  }
  
  return (
    <>
    
    <div className="conatiner "></div>
    <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6">
            <Preview resumeDetails={resume}/>
        </div>
    </div>
    <div className="col-md-2"></div>
    </>
  )
}

export default ViewResume