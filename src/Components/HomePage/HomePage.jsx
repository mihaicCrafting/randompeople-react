import React from 'react'
import Header from '../Header/Header'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import "./HomePage.scss"
import HumanList from './HumanList'

export default function HomePage() {
  return (
      <>
      <Header/>
      <HumanList/>
      </>
    
  )
}
