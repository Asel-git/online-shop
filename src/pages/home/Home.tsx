import styles from "./Home.module.css";
import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { useToggleFavoriteProductMutation } from "../../redux/api/favoriteProductsApi";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const { data: products = [], refetch } = useGetProductsQuery();
  const [toogleFavoriteProduct] = useToggleFavoriteProductMutation();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth !== "true") {
      navigate("/login");
    }
    refetch();
  }, [navigate]);

  return (
    <div className={styles.main_cards}>
      {products.map((el: any) => {
        return (
          <div className={styles.cards}>
            <img
              className={styles.img_cards}
              src={el.photoUrl}
              alt={el.productName}
            />
            <p className={styles.prod_name}>{el.productName}</p>
            <span className={styles.prod_price}>{el.price}</span>
            <button
              className={styles.prod_btn}
              onClick={() => {
                toogleFavoriteProduct(el._id);
              }}
            >
              <img src="src/assets/heart.svg" alt="heart" />
            </button>
            <p>
              <a className={styles.basket} href="">
                Добавить в корзину
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
