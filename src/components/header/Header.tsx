import { useState } from "react";
import styles from "./Header.module.css";
import Modal from "../../components/modal/Modal";
import AddProductForm from "../../components/forms/addProductForm/AddProductForm";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  // const toggleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <a className={styles.logo_link} href="/">
            <img src="src/assets/logo.jpg" alt="logo" />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menu_item}>
              <a className={styles.link} onClick={toggleLogin} href="/login">
                <img src="src/assets/login.svg" alt="login" />
              </a>
              <p className={styles.text}>{isLoggedIn ? "Logout" : "Login"}</p>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/favorites-products">
                <img src="src/assets/heart.svg" alt="heart" />
              </a>
              <p className={styles.text}>Избранные</p>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.link} href="/basket">
                <img
                  className={styles.img}
                  src="src/assets/basket.svg"
                  alt="basket"
                />
              </a>
              <p className={styles.text}>Корзина</p>
            </li>

            <button className={styles.prod_add} onClick={handleCloseModal}>
              + Добавить
            </button>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
              <AddProductForm closeModal={handleCloseModal} />
            </Modal>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
