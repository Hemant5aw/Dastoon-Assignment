import React from 'react'

const Comic = ({url}) => {

  return (
    <div>
        {
            url.map(u=>(
                <img src={u}/>
            ))
        }
    </div>
  )
}

export default Comic
