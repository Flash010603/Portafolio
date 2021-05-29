
import { useContext, useEffect } from 'react';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { Aside } from '../components/Aside';
import { PageContext } from '../context/PageContext';
import aside from '../styles/Home.module.css'
import { Skills } from '../components/Skills';
export default function Home() {

  const {  counter } = useContext(PageContext);

  return (
    <div className={aside.container}>
     

      <div className={aside.container_face}>

        
        <Aside/>
        
        {(counter==0) && <AboutMe/>}
        {(counter==1) && <Projects/>}
        {(counter==2) && <Skills/>}

      </div>

    </div>
  )
}
