import { createContext, useContext, useReducer } from "react";
import {faker} from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
     //   name: faker.commerce.productName(),
     "name":  faker.helpers.arrayElement([
      "Cappuccino",
      "Cheesy",
      "Cafeteria",
      "Salad Mix",
      "Ice Cream",
      "Strawberry",
      "Chessy Sandwich",
      "Juicy",
      "Chocolaty",
      "Meal Combo",
      "Cheesy",
      "Cheesy",
      "Cheesy",
      "Juice",
      "Chocolaty"
    ]),
        price: faker.commerce.price(),
    //    image: faker.image.food(),
    "image":  faker.helpers.arrayElement([
      "https://images.unsplash.com/photo-1557748362-4e95f0de4f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60", 
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", 
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1619734490039-a68d5c82cf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1632935254449-e777adc9addf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1590080962330-747c6aba8028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5vb2RsZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNvdXRoJTIwaW5kaWFuJTIwZm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1631503190221-0f6a15367926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1522039906375-50d8e4d9550a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcmJ1Y2tzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1605926637512-c8b131444a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1566217678452-48d9de2fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGp1aWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      "https://images.unsplash.com/photo-1617455559706-fa196228c05d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60"
    ]),
    // image: faker.image.food(), // => "https://loremflickr.com/640/480/food"
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
