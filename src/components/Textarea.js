import React, { useEffect, useState } from 'react'
import query from './api';

const Textarea = ({addurl}) => {
    const[inputState,setInput]=useState();
    const [url,seturl]=useState("");
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    useEffect(
        ()=>{
        async function query(data) {
            const response = await fetch(
              "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
              {
                headers: { 
                  "Accept": "image/png",
                  "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                  "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
              }
            );
            const result = await response.blob();
            // return result;
        // const u= query({"inputs":inputState});
        const u=result;
        seturl(u);
            }
            query({"inputs":inputState});
    },[inputState]);
    // const imgurl= await

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        addurl(url);
      }}>
        <label>write story here</label>
        <input type='text' placeholder='type your story' value={inputState} onChange={handleChange}/>
        <button >submit</button>
      </form>
    </div>
  )
}

export default Textarea
