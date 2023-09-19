import { useEffect, useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  // https://6509c5d8f6553137159bfc1a.mockapi.io/items - ссылка на json на всЯкий случай

  useEffect(() => {
    fetch("https://6509c5d8f6553137159bfc1a.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap ">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log(`Вы добавили в закладки`)}
              onPlus={() => console.log(`Вы добавили в корзину : ${obj.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
