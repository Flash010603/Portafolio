
import aside from '../styles/Home.module.css'

export const Aside = () => {
    
    return (
        <>
            <aside className={aside.aside_container}>

                <div className={aside.container_img}>
                    <div className={aside.img_face}></div>
                </div>
                <h1 className={aside.name}>Franklin  <span className={aside.lastName}>Martinez Lucas</span></h1>
                <div className={aside.office}><p> Desarrollador web</p></div>

                <div className={aside.containerContact}>
                    <a href="mailto:fml010603@gmail.com" target="_blank"><i className="far fa-envelope"></i></a>
                    

                    <a href="https://github.com/Franklin361" target="_blank" ><i className="fab fa-github"></i></a>

                    <a href="https://api.whatsapp.com/send?phone=528128734368&text=Hola!%20Estamos%20interesados%20en%20tu%20perfil" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    
                </div>

                <div className={aside.containerDetails}>
                    <div className={aside.itemDetail}>
                        <i className="far fa-calendar-minus"></i>
                        <p>03 / Junio / 2001</p>
                    </div>

                    <div className={aside.itemDetail}>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>General Zuazua, N.L., México</p>
                    </div>

                </div>

                
            </aside>
        </>
    )
}
