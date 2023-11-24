import React, { useEffect, useState } from 'react'
import Textarea from './Textarea'
import { useNavigate} from 'react-router-dom'
import query from './api';

const Panels = ({addurl}) => {
  const [state,setstate]=useState([]);
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/comic');
  }
   
  const array= Array(10).fill(null);
  return (
    <>
      <div className='panels' >
          {
            array.map((i,key)=>(
              <div className='text'>
                {/* <label ></label> */}
                <Textarea addurl={addurl}/>
              </div>
              )
            )
          }

      </div>
      {/* <div>
          <button onClick={handleClick}>make comic</button>
      </div> */}
    </>
  )
}

export default Panels
