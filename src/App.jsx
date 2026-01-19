import "./App.scss";
import { FaCode } from "react-icons/fa";

export default function App() {
  const product = [
    {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
     {
      icon: FaCode,
      title: "Программирование",
      desc: "Обучение с упором на практику и реальные задачи",
      info: "Срок обучения: 3 года",
    },
  ];

  return (
    <div className="app">
      <div className="app_grid">
        {product.map((item, items) => {
          const Icon = item.icon;
          return (
            <div className="app_card" key={items}>
              <Icon className="app_icon" />
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
