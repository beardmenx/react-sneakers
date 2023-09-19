import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const dataArr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
    imageUrl: "/images/sneakers/1.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/images/sneakers/4.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 8499,
    imageUrl: "/images/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede ",
    price: 8499,
    imageUrl: "/images/sneakers/3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {dataArr.map((obj) => (
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
