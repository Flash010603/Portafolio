

import { Button } from './Button'

import main from '../styles/Main.module.css'
import project from '../styles/Projects.module.css'
import { Cardproject } from './Cardproject'
import { projectsData } from '../data/data'


export const Projects = () => {

    return (
        <>
            <main className={main.main_container} >
                <div className="animate__animated animate__fadeIn">
                    <header className={main.header}>
                        <h2>Projects</h2>
                        <hr />
                        <p className={project.textInit}>Estos son algunos de los diferentes proyectos que he realizado </p>
                        <p className={project.down}>(Desliza hacia abajo)</p>
                    </header>

                    <Button right={true} />
                    <Button right={false} />


                    <div className={main.contentDetails}>


                        <div className={project.contentProjects}>


                            {
                                projectsData.map((p, index) => (

                                    <Cardproject
                                        key={index}
                                        title={p.title}
                                        source={p.source}
                                        desc={p.desc}
                                        demo={p.demo}
                                        git={p.git}
                                        labels={p.labels}
                                    />
                                ))
                            }

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
