import React from 'react'
import emojis from "../json/emoji.json"
import EmojiItem from './EmojiItem'
import { useState } from 'react';

export default function EmojisContainer() {
  const [emos, setEmos] = useState(emojis);

  const handleChange = (e) => {
    e.preventDefault();
    let key = e.target.value.toLowerCase();
    let updatedList = emos.filter((item)=>{
      if(key === ""){
        return emos
      }else{
        return item.keywords.includes(key)
      }
    })
    console.log(updatedList);
    return setEmos(updatedList)
  }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}>
        <input type="text" name='search' style={{fontSize:"20px", borderRadius:"10px", width:"50%"}} onChange={handleChange}/>
        <div className='container' style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {emos.map(emos => {
                return (<EmojiItem symbol={emos.symbol} />)
            })}

        </div>
    </div>
  )
}
