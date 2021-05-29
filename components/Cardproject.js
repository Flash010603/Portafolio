import Image from "next/image";
import project from '../styles/Projects.module.css'

export const Cardproject = ({ source, desc, title, demo, git, labels }) => {
    return (
        <div className={project.container_item}>
            <h2>{title}</h2>
            <div className={project.container_img}>
                <div className={project.img}>
                    <Image
                        src={source}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                        
                    />
                </div>

                <div className={project.container_btn} >
                    <a href={`${demo}`} target="_blank" rel="noopener noreferrer">Demo</a>
                    <a href={`${git}`} target="_blank" rel="noopener noreferrer">Github</a>
                </div>

            </div>
            <p>{desc}</p>
            <div className={project.container_item_tec}>
                <p className={project.labelDo}>Hecho con:</p>
                {
                    labels.map((l, index) => (
                        <div key={index} className={project.item_tec}>
                            <p>{l}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
