import styles from "./FavoritesProd.module.css";
import React from "react";
import { useGetFavoriteProductsQuery } from "../../redux/api/favoriteProductsApi";
import { useToggleFavoriteProductMutation } from "../../redux/api/favoriteProductsApi";

const FavotiresProducts: React.FC = () => {
  const { data: products = [] } = useGetFavoriteProductsQuery();
  const [toogleFavoriteProduct] = useToggleFavoriteProductMutation();
  return (
    <div className={styles.main_favorite}>
      {products.map((el: any) => {
        const { productName } = el.product;
        const { photoUrl } = el.product;
        const { price } = el.product;
        return (
          <div className={styles.favorite_prod}>
            <img
              className={styles.img_cards}
              src={photoUrl}
              alt={el.productName}
            />
            <p className={styles.prod_name}>{productName}</p>
            <span className={styles.prod_price}>{price}</span>
            <button
              className={styles.prod_btn}
              onClick={() => {
                toogleFavoriteProduct(el._id);
              }}
            >
              <img src="src/assets/heart.svg" alt="heart" />
            </button>
            <p>
              <a className={styles.basket} href="#">
                Добавить в корзину
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FavotiresProducts;
