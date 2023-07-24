import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notFound">
            <p className="notFound__code">404</p>
            <p className="notFound__text">Страница не найдена</p>
            <Link className="notFound__link" to='/'>Назад</Link>
        </div>
    )
}

export default NotFound;