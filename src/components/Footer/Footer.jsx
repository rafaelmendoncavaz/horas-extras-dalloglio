import logo from "../../assets/logo.jpg"
import style from "./Footer.module.scss"

export function Footer() {

    return (
        <footer className={style.fixed}>
            <div className="container flex-row center">
                <div className={`${style.imageContainer} rounded`}>
                    <img className={style.imageContent} src={logo} alt="" />
                </div>
                <p className="text1 bold">Todos os direitos reservados &copy; Dall'<span className="text1 yellow bold">Oglio</span> 2024</p>
            </div>
        </footer>
    )
}