import React from 'react'

// eslint-disable-next-line
export const GraphicLink = (props: any) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <img src={process.env.PUBLIC_URL + props.src} alt={props.alt}/>
    </a>
  )
}
