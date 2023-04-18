import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryID } = useParams();

  useEffect(() => {
    const asyncFunc = () => {
      if (categoryID) {
        return getProductsByCategory(categoryID);
      } else {
        return getProducts();
      }
    };
    // console.log (categoryID)

    asyncFunc(categoryID)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryID]);

  return (
    <div>
      <Categories />
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
