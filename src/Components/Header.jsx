import { format } from "date-fns";
import { useEffect, useState } from "react";
import { BakeryProducts } from "../../src/Assets/bakery";
import { HiSearch } from "react-icons/hi";
import styles from "./Header.module.css";
import UserManual from "./UserManual";

function transformToRegularChar(string) {
  return string.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
}

export default function Header({ setProductList }) {
  const [search, setSearch] = useState("");
  const [showManual, setShowManual] = useState(false); // State to control User Manual visibility
  let filteredProducts = [];

  useEffect(() => {
    if (!search.trim()) {
      return setProductList(BakeryProducts);
    }
    if (!filteredProducts) {
      return setProductList(BakeryProducts);
    }
    filteredProducts = BakeryProducts.filter((product) => {
      const productNameWithRegularChar = transformToRegularChar(
        product.name.toLowerCase()
      );
      const searchWithRegularChar = transformToRegularChar(
        search.toLowerCase()
      );
      return productNameWithRegularChar.includes(searchWithRegularChar);
    });
    return setProductList(filteredProducts);
  }, [search]);

  return (
    <header className={styles.container}>
      <div className={styles.headerTop}>
        <h1>Welcome to Dalilo!</h1>

        <div>
          <span>Access Date: </span>
          <time>
            {format(new Date(), "EEEEEE' - ' dd '/' MM '/' u").toUpperCase()}
          </time>
        </div>
      </div>

      <div className={styles.headerBottom}>
        <div>
          <p>The best in locality</p>
          {/* <p>Follow Dalilo's Bakery on Instagram! <a>@dalilosbakery</a></p> */}
          <p>
            "Welcome to Shree Ganesha Bakery - Your Freshly Baked Delights
            Awaits!"
            <br />
            "Experience the Taste of Tradition at Shree Ganesha Bakery!"
          </p>
        </div>

        {/* Use a function for onClick */}
        <h1 onClick={() => setShowManual(!showManual)}>User Manual</h1>

        {/* Conditionally render the User Manual */}
        {showManual && <UserManual />}

        <label className={styles.searchBox}>
          <HiSearch size={25} />
          <input
            placeholder="Search the menu..."
            type="text"
            name="research"
            id="research"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
        </label>
      </div>
    </header>
  );
}
