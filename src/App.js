import React from "react";
import { useState } from "react";
import reportWebVitals from "./reportWebVitals";
import data from "./hard-coded-data";
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState([]);
  function AddonOnarray(item) {
    return setSelectedItem([...selectedItem, item]);
  }

  function RemoveOnarray(item) {
    const filterdarray = selectedItem.filter((deleteditem) => {
      if (deleteditem.id === item.id) {
        return false;
      } else {
        return true;
      }
    });
    setSelectedItem(filterdarray);
  }
  function handleClick(item) {
    const ItemalreadyExists = selectedItem.some((personaldata) => {
      if (item.id === personaldata.id) return true;
      else return false;
    });
    ItemalreadyExists ? RemoveOnarray(item) : AddonOnarray(item);
  }

  const Person = data.map((item) => (
    <div className="MainDiv" onClick={() => handleClick(item)}>
      <div className="ImgDiv">
        <img src={item.picture.large} alt={item.id.name} />
      </div>
      <div className="DataDiv">
        <h1>
          {item.name.title} {item.name.first} {item.name.last}
        </h1>
        <h2> {item.gender} </h2>
        <p>{item.phone}</p>
      </div>
    </div>
  ));

  const SelectedPerson = selectedItem.map((item) => (
    <div className="PersonName" onClick={() => handleClick(item)}>
      <button>
        {item.name.title} {item.name.first} {item.name.last}
      </button>
    </div>
  ));
  return (
    <>
      <div className="Main">
        <div className="div1">{Person}</div>
        <div className="div2">{SelectedPerson}</div>
        <div className="clr"></div>
      </div>
    </>
  );
}

export { App };
reportWebVitals();
