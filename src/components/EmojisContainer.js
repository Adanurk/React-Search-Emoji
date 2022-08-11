import React from 'react'
import emojis from "../json/emoji.json"
import EmojiItem from './EmojiItem'

export default function EmojisContainer() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"10px"}}>
        <input type="text" name='search' style={{fontSize:"20px", borderRadius:"10px", width:"50%"}}/>
        <div className='container' style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {emojis.map(emojis => {
                return (<EmojiItem symbol={emojis.symbol} />)
            })}

        </div>
    </div>
  )
}
