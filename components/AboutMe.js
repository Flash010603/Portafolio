import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import main from '../styles/Main.module.css'
import aside from '../styles/Home.module.css'
import { Button } from './Button'
export const AboutMe = () => {
  const { counter } = useContext(PageContext);
  return (
    <>
      <main className={main.main_container}>
        <div className="animate__animated animate__fadeIn">
          <header className={`${main.headerBig} ${main.header}`}>
            <h2>Intro</h2>
            <hr />
            <p className={main.textBig}>Hola a todos!</p>
            <p className={main.description}> Soy un <b className={main.puesto}>Fronted Developer</b> que le gusta implementar diseños que inspiren y atraigan a las personas.</p>

            <div className={main.img_div}>

            </div>
            <div className={aside.containerMessage}>
              <a  href="/cv.pdf" target="_black" className={aside.message}>
                <p>Descargar CV.</p>
                <i className="fas fa-download"></i>
              </a>
            </div>
          </header>


          {
            (counter < 0) &&
            <Button right={false} />
          }
          <Button right={true} />

        </div>
      </main>
    </>
  )
}
