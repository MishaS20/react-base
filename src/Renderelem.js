import React from 'react'

export default function Renderelem(props) {
   return (
      <div key={`${props.elem}${props.idx}`}>{props.elem}</div>
   )
}
