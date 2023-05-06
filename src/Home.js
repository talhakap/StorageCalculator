import React, { useEffect, useState } from "react";
import myImage from "./5x5.jpg";
import RowItem from "./components/RowItem";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
const Home = () => {
  const [items, setItems] = useState([
      { id: 1, name: "Sofa", length: 86, width: 48, height: 38, quantity: 0 },
      { id: 2, name: "Recliner", length: 40, width: 35, height: 38, quantity: 0 },
      { id: 3, name: "Ottoman", length: 35, width: 27.5, height: 17, quantity: 0 },
      { id: 4, name: "Coffee Table", length: 70, width: 24, height: 16, quantity: 0 },
      { id: 5, name: "TV Bench", length: 18, width: 90, height: 36, quantity: 0 },
      { id: 6, name: "Shelf Unit", length: 31, width: 16, height: 58, quantity: 0 },
      { id: 7, name: "Fouton Frame", length: 82, width: 37, height: 38, quantity: 0 },
      { id: 8, name: "Armchair", length: 41, width: 35, height: 35, quantity: 0 },
      { id: 9, name: "Media Unit", length: 56, width: 9, height: 51, quantity: 0 },
      { id: 10, name: "Bookcase", length: 31.5, width: 11, height: 79.5, quantity: 0 },
      { id: 11, name: "Flat TV (55\")", length: 54, width: 7, height: 33, quantity: 0 },
      { id: 12, name: "Cabinet", length: 31, width: 15, height: 80, quantity: 0 },
      { id: 13, name: "Dining Table", length: 60, width: 38, height: 30, quantity: 0 },
      { id: 14, name: "Dining Chair", length: 22, width: 18.5, height: 39, quantity: 0 },
      { id: 15, name: "China Cabinet", length: 31, width: 16, height: 80, quantity: 0 },
      { id: 16, name: "Cupboard/Pantry", length: 48, width: 19.5, height: 76, quantity: 0 },
      { id: 17, name: "Bar Table", length: 27.5, width: 27.5, height: 42, quantity: 0 },
      { id: 18, name: "Sideboard", length: 44, width: 18, height: 42, quantity: 0 },
      { id: 19, name: "China Buffet", length: 61, width: 16, height: 27, quantity: 0 },
      { id: 20, name: "Microwave", length: 15, width: 20, height: 12, quantity: 0 },
      { id: 21, name: "Sink", length: 22, width: 30, height: 10, quantity: 0 },
      { id: 22, name: "Bar Chair", length: 16, width: 20, height: 44, quantity: 0 },
      { id: 23, name: "Bench Seat", length: 60, width: 15, height: 18, quantity: 0 },
      { id: 24, name: "Portable Air Conditioner", length: 15.5, width: 18, height: 30, quantity: 0 },
      { id: 25, name: "Window Air Conditioner", length: 21, width: 19, height: 14.5, quantity: 0 },
      { id: 26, name: "Stove", length: 24, width: 28, height: 45, quantity: 0 },
      { id: 27, name: "Refrigerator", length: 27, width: 24, height: 60, quantity: 0 },
      { id: 28, name: "Dishwasher", length: 25, width: 24, height: 33.5, quantity: 0 },
      { id: 29, name: "Washer", length: 24, width: 23.5, height: 35, quantity: 0 },
      { id: 30, name: "Dryer", length: 23, width: 23, height: 35, quantity: 0 },
      { id: 31, name: "Chest Freezer", length: 23.5, width: 22.5, height: 35, quantity: 0 },
      { id: 32, name: "Bar Fridge", length: 19, width: 17, height: 20, quantity: 0 },
      { id: 33, name: "Electric Fireplace", length: 44, width: 16, height: 43, quantity: 0 },
      { id: 34, name: "Bedframe", length: 83.5, width: 63, height: 61, quantity: 0 },
      { id: 35, name: "Mattress", length: 80, width: 76, height: 20, quantity: 0 },
      { id: 36, name: "Dresser", length: 42.5, width: 20, height: 51, quantity: 0 },
      { id: 37, name: "Wardrobe", length: 46, width: 20, height: 75, quantity: 0 },
      { id: 38, name: "Crib", length: 54, width: 29, height: 34, quantity: 0 },
      { id: 39, name: "Change Table", length: 20, width: 31, height: 42, quantity: 0 },
      { id: 40, name: "Closet Organizer", length: 39, width: 23, height: 16, quantity: 0 },
      { id: 41, name: "Linen Chest", length: 39, width: 16, height: 18, quantity: 0 },
      { id: 42, name: "Dressing Table", length: 40, width: 19, height: 62, quantity: 0 },
      { id: 43, name: "Bathroom Storage Unit", length: 12.5, width: 11, height: 65, quantity: 0 },
      { id: 44, name: "Barbecue", length: 68, width: 28, height: 49, quantity: 0 },
      { id: 45, name: "Patio Table", length: 55, width: 30, height: 28, quantity: 0 },
      { id: 46, name: "Pool Lounger", length: 77, width: 27, height: 11, quantity: 0 },
      { id: 47, name: "Picnic Table", length: 60, width: 52.5, height: 30, quantity: 0 },
      { id: 48, name: "Lawnmower", length: 24, width: 36, height: 18, quantity: 0 },
      { id: 49, name: "Snow Blower", length: 52, width: 26.5, height: 43.5, quantity: 0 },
      { id: 50, name: "Adirondack Chair", length: 39, width: 32, height: 38, quantity: 0 },
      { id: 51, name: "Canoe", length: 180, width: 30, height: 18, quantity: 0 },
      { id: 52, name: "Bicycle", length: 68, width: 18, height: 22, quantity: 0 },
      { id: 53, name: "Wheelbarrow", length: 65, width: 30, height: 28, quantity: 0 },
      { id: 54, name: "Billiards Table", length: 96, width: 54, height: 32, quantity: 0 },
      { id: 55, name: "Ping Pong Table", length: 108, width: 60, height: 30, quantity: 0 },
      { id: 56, name: "Treadmill", length: 70, width: 35, height: 55, quantity: 0 },
  ]);
  const [addedItems, setAddedItems] = useState([]);
  const [progress, setProgress] = useState(25);
  const [volSum, setVolSum] = useState(0);
  const [selectedButton, setSelectedButton] = useState(1);
  const [newRow, setNewRow] = useState({
    id: "",
    name: "",
    length: "",
    width: "",
    height: "",
    quantity: "",
  });

  const items1 = items.slice(0, 11);
  const items2 = items.slice(12, 22);
  const items3 = items.slice(23, 32);
  const items4 = items.slice(33, 42);
  const items5 = items.slice(43, 55);
  const [itemsRender, setItemsRender] = useState(items1);

  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  useEffect(() => {
    const calItemsVol = () => {
      let defaultSum = 0;
      items.map((item) => {
        defaultSum +=
          Number(item.height) *
          Number(item.length) *
          Number(item.width) *
          Number(item.quantity);
        if (defaultSum > 0) {
          console.log(item);
        }
      });

      return defaultSum;
    };
    const calAddedItemsVol = () => {
      let newSum = 0;
      addedItems.map((item) => {
        newSum +=
          Number(item.height) *
          Number(item.length) *
          Number(item.width) *
          Number(item.quantity);
        console.log("new  sum", newSum);
      });

      return newSum;
    };

    const totalVol = (calItemsVol() + calAddedItemsVol()) / 1728;

    setVolSum(totalVol);

    let max = 0;
    if (totalVol <= 200) {
      max = 200;
    } else if (totalVol > 200 && totalVol <= 400) {
      max = 400;
    } else if (totalVol > 400 && totalVol <= 600) {
      max = 600;
    } else if (totalVol > 600 && totalVol <= 800) {
      max = 800;
    } else if (totalVol > 800 && totalVol <= 1200) {
      max = 1200;
    } else if (totalVol > 1200 && totalVol <= 1600) {
      max = 1600;
    } else if (totalVol > 1600 && totalVol <= 2000) {
      max = 200;
    } else if (totalVol > 2000 && totalVol <= 2400) {
      max = 2400;
    } else {
      max = 0;
    }

    setProgress(max);
  }, [items, addedItems]);

  useEffect(() => {
    if (selectedButton === 1) {
      setItemsRender(items1);
    } else if (selectedButton === 2) {
      setItemsRender(items2);
    } else if (selectedButton === 3) {
      setItemsRender(items3);
    } else if (selectedButton === 4) {
      setItemsRender(items4);
    } else {
      setItemsRender(items5);
    }
  }, [selectedButton]);

  const addRowHandler = () => {
    if (newRow.name) {
      setAddedItems((prev) => [
        ...prev,
        { ...newRow, id: prev.length + 1, new: true },
      ]);
      setNewRow({
        id: 0,
        name: "",
        length: 0,
        width: 0,
        height: 0,
        quantity: 0,
      });
    }
  };
  const calculateVolHandler = (item, qty, vol) => {

    if (item.new === true) {
      setAddedItems((prev) => {
        let newArr = [...prev];
        newArr[item.id - 1] = { ...item };
        return newArr;
      });
    } else {
      setItems((prev) => {
        let newArr = [...prev];
        newArr[item.id - 1] = { ...item };
        return newArr;
      });
    }
  };

  const deleteHandler = (id) => {
    setAddedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Storage Calculator</h2>

      <div className="button">
        <button onClick={() => handleButtonClick(1)}>
          Living Room & Study{" "}
        </button>
        <button onClick={() => handleButtonClick(2)}>
          Dining Room & Kitchen{" "}
        </button>
        <button onClick={() => handleButtonClick(3)}>Major Appliances </button>
        <button onClick={() => handleButtonClick(4)}>Bedroom & Bath </button>
        <button onClick={() => handleButtonClick(5)}>
          Lifestyle & Outdoor{" "}
        </button>
      </div>

      <div className="display">
        <table className="inputBox">
          <thead>
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {itemsRender.map((item, key) => (
              <RowItem
                key={item.id}
                item={item}
                calculateVol={calculateVolHandler}
              />
            ))}

            {addedItems.map((item, key) => {
              return (
                <RowItem
                  firstNew={key === 0 && item.new ? true : false}
                  key={item.id}
                  item={item}
                  calculateVol={calculateVolHandler}
                  deleteRow={deleteHandler}
                />
              );
            })}
            <tr>
              <td>Add an Item</td>
            </tr>

            <tr>
              <td>
                <label>
                  Item:
                  <input
                    id="itemin"
                    type="text"
                    value={newRow.name}
                    onChange={(e) =>
                      setNewRow((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </label>
              </td>
              <td>
                <label>
                  Length:
                  <input
                    type="text"
                    value={newRow.length}
                    onChange={(e) =>
                      setNewRow((prev) => ({ ...prev, length: e.target.value }))
                    }
                  />{" "}
                  " x
                </label>

                <label>
                  Width:
                  <input
                    type="text"
                    value={newRow.width}
                    onChange={(e) =>
                      setNewRow((prev) => ({ ...prev, width: e.target.value }))
                    }
                  />{" "}
                  " x
                </label>

                <label>
                  Height:
                  <input
                    type="text"
                    value={newRow.height}
                    onChange={(e) =>
                      setNewRow((prev) => ({ ...prev, height: e.target.value }))
                    }
                  />{" "}
                  "
                </label>
              </td>

              <td>
                <label>
                  Quantity:
                  <input
                    type="text"
                    value={newRow.quantity}
                    onChange={(e) =>
                      setNewRow((prev) => ({
                        ...prev,
                        quantity: e.target.value,
                      }))
                    }
                  />
                </label>
              </td>
              <td>
                {" "}
                <button onClick={addRowHandler} id="add">
                  <AddBoxOutlinedIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="calculations">
          <p>Unit Size Calculator</p>
          <img id="fivebyfive" src={myImage} alt="5x5"></img>
          <p id="calc">Calculated Size : {Math.round(volSum)} ft₃</p>
          <BorderLinearProgress
            variant="determinate"
            value={(volSum / progress) * 100}
            style={{ height: "30px", marginTop: "10px", borderRadius: "50px" }}
          />

          <p id = "bar">{Math.round(volSum)} out of {(progress)} ft₃</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
