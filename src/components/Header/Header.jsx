import logo from "../../assets/logo.jpg"

export function Header() {

    return (
        <header>
            <div className="container flex-row between">
                <div>
                    <img src={logo} alt="Logotipo Dall'Oglio" />
                </div>
                <div>
                    <h1 className="title1 italic">
                        DALL'<span className="title1 yellow">OGLIO</span>
                    </h1>
                    <p className="text1 center bold">
                        Desde <span className="text1 yellow bold">1972</span>
                    </p>
                </div>
            </div>
        </header>
    )
}