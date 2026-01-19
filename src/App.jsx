import "./App.scss";
import { FaCode } from "react-icons/fa";
import products from "./products.json";

export default function App() {
  return (
    <div className="app">
      <div className="app_grid">
        {products.map((item) => {
          return (
            <div className="app_card">
              <FaCode className="app_icon" />
              <h3 className="app_title">{item.title}</h3>
              <p className="app_suptitle">{item.desc}</p>
              <span className="app_text">{item.info}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
