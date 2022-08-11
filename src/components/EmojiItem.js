import React from 'react'

export default function EmojiItem(props) {
  return (
    <div style={{
        width:"200px", height:"200px", boxShadow:"2px 5px 5px #8D8D9E", display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", borderRadius:"20%", fontSize:"50px", margin:"20px", backgroundColor:"#F5F0E6"}}>
        {props.symbol}
    </div>
  )
}
