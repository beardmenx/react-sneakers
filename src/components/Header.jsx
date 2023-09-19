function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          className="m-10"
          src="/images/logo.svg"
          alt=""
          width={40}
          height={40}
        />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex m-10">
        <li className="mr-20">
          <img
            className="mr-20"
            src="/images/basket.svg"
            alt=""
            width={20}
            height={20}
          />
          <span>1205 руб.</span>
        </li>
        <li className="mr-20">
          <img src="/images/user.svg" alt="" width={20} height={20} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
