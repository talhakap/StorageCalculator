import React, { Fragment, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function RowItem({ item, calculateVol, firstNew, deleteRow }) {
  const [qty, setQty] = useState(item.quantity);
  const [width, setWidth] = useState(item.width);
  const [length, setLength] = useState(item.length);
  const [height, setHeight] = useState(item.height);

  const [edit, setEdit] = useState(false);

  const editHandler = () => {
    setEdit((prev) => !prev);
  };

  useEffect(() => {
    if (!edit) {
      calculateVol(
        {
          id: item.id,
          name: item.name,
          quantity: qty,
          length,
          width,
          height,
          new: item.new,
        },
        qty,
        length * width * height * qty
      );
    }
  }, [qty, edit]);

  const deleteHandler = () => {
    deleteRow(item.id);
  };
  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>
        {edit ? (
          <Fragment>
            <label>
              L :
              <input
                type="text"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />{" "}
              " x
            </label>

            <label>
              W :
              <input
                type="text"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />{" "}
              " x
            </label>

            <label>
              H :
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />{" "}
              "
            </label>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            {length}" x {width}" x {height}"
          </Fragment>
        )}
        ft{" "}
        <button id="add" onClick={editHandler}>
          {edit ? "Save Size" : "Edit Size"}
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            setQty((prev) => (prev > 0 ? prev - 1 : 0));
          }}
        >
          {" "}
          -
        </button>{" "}
        {qty}{" "}
        <button
          onClick={() => {
            setQty((prev) => Number(prev) + 1);
          }}
        >
          {" "}
          +{" "}
        </button>
      </td>
      <td>
        {item.new && (
          <div
            style={{
              color: "white",
              background: "white",
              borderRadius: "2px",
              marginRight: "10px",
            }}
            onClick={deleteHandler}
          >
            <DeleteOutlinedIcon
              style={{
                border: "1px solid white",
                color: "black",
                // background: "white",
                borderRadius: "2px",
                cursor: "pointer",
                
              }}
            />
          </div>
        )}
      </td>
    </tr>
  );
}
