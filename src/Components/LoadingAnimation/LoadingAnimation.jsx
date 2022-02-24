import React from 'react'
import "./LoadingAnimation.scss"

export default function LoadingAnimation() {
  return (
      <>
      <svg width="50" height="50" viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg" id="loading-container">

        <g id="LoadingAnimation">
        <path id="ld-grey" d="M0 30C0 13.4315 13.4315 0 30 0H101V101H0V30Z" fill="#667587"/>
        <path id="ld-white" d="M202 30C202 13.4315 188.569 0 172 0H101V101H202V30Z" fill="#F3F5F9"/>
        <path id="ld-yellow" d="M202 172C202 188.569 188.569 202 172 202H101V101H202V172Z" fill="#FBBA3F"/>
        <path id="ld-blue" d="M0 172C0 188.569 13.4315 202 30 202H101V101H0V172Z" fill="#16284A"/>
        </g>

      </svg>
      </>
  )
}
