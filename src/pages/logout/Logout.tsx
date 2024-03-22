import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default Logout;
