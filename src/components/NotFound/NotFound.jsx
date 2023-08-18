import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <main className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__link" onClick={handleBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
