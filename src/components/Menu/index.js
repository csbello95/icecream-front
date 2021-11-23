import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Nav>
            <Nav.Item>
                <Link className="nav-link" to="/icecreams">Helados</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/icecreams/create">Crear Helado</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/icecreams/update">Actualizar Helado</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="nav-link" to="/icecreams/delete">Eliminar Helados</Link>
            </Nav.Item>
        </Nav>
    )
}

export default Menu;