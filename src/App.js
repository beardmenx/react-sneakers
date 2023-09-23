import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  // https://6509c5d8f6553137159bfc1a.mockapi.io/items - ссылка на json на всЯкий случай
  // https://6509c5d8f6553137159bfc1a.mockapi.io/cart - сохраняю данные корзины на бекенде

  useEffect(() => {
    axios
      .get("https://6509c5d8f6553137159bfc1a.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6509c5d8f6553137159bfc1a.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6509c5d8f6553137159bfc1a.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoteItem = (id) => {
    console.log(id);
    axios.delete(`https://6509c5d8f6553137159bfc1a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoteItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу '${searchValue}'`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="/images/btn-remove.svg"
                alt="Remove"
              />
            )}
          </div>
        </div>

        <div className="d-flex flex-wrap ">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, id) => (
              <Card
                key={id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickFavorite={() => console.log(`Вы добавили в закладки`)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
