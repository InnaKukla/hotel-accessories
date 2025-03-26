import React, { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import UpscaleLinen from '../../components/UpscaleLinen/UpscaleLinen'
import Prefooter from '../../components/Prefooter/Prefooter'
import CatalogHome from '../../components/CatalogHome/CatalogHome'
import Beliefs from '../../components/Beliefs/Beliefs'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <div>
     <Hero/>
     <UpscaleLinen/>
     <Beliefs/>
     <CatalogHome/>
     <Prefooter/>
    </div>
  )
}

export default HomePage
