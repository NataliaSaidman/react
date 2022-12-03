import "./Navbar.css"
import logo from "../../assets/mano.png"

export const Navbar = () => {
    const test = {href: ""}
    return(
        <nav className="navbar">
            <img src={logo} alt="" width="50px"/>
            <a href={test.href}>Inicio</a>
            <a href={test.href}>Blog</a>
            <a href={test.href}>Galeria</a>
            <a href={test.href}>Contacto</a>
        </nav>
    )
}

// export {Navbar}