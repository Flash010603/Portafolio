import { Button } from './Button'
import Image from 'next/image'
import main from '../styles/Main.module.css'
import project from '../styles/Projects.module.css'
import skill from '../styles/Skills.module.css'
import { skills } from '../data/data'



export const Skills = () => {
    return (
        <>
            <main className={main.main_container}>
                <div className="animate__animated animate__fadeIn">
                    <header className={main.header}>
                        <h2>Habilidades</h2>
                        <hr />
                        <p className={project.textInit}>Actualmente estas son las tecnologías con las que he trabajado.</p>
                        <p className={project.down}>(Desliza hacia abajo)</p>
                    </header>

                    <Button right={true} />
                    <Button right={false} />


                    <div className={main.contentDetails}>


                        <div className={skill.container}>
                            {
                                skills.map( ({url,tec}, index) => (
                                             
                                    <div className={skill.item_main} key={index}>
                                        <div className={skill.container_img}>
                                            <Image
                                                src={url}
                                                className={skill.img}
                                                layout="fill"
                                                draggable={false}
                                                
                                            />
                                        </div>
                                        <div className={skill.text}>
                                            <p>{tec}</p>
                                        </div>
                                    </div>
                                    
                                ))
                            }
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}
