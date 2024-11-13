import React, { useState } from "react";
import CommentBox from "./components/CommentBox";
import "./App.css";
import Header from "./components/Header";
import { addMessage } from "./store/slices/messageReducer";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const allMessage = useSelector((state) => state.message.list);
  const [inputedData, setInputedData] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: crypto.randomUUID(),
      message: inputedData,
    };
    if (newData.message) {
      dispatch(addMessage(newData));
    }
    setInputedData("");
  };
  return (
    <>
      <Header />
      <div className="upper_hero_section">
        <h1>comments</h1>
        <div>
          <form onSubmit={onHandleSubmit} className="input-area">
            <input
              onInput={(e) => {
                setInputedData(e.target.value);
              }}
              type="text"
              value={inputedData}
            />
            <button>Add</button>
          </form>
        </div>
        <div className="messages">
          {allMessage.map(({ id, message, reply }) => (
            <CommentBox
              key={id}
              id={id}
              reply={reply}
              message={message}
              handleSubmit={onHandleSubmit}
              inputedData={inputedData}
              setInputedData={setInputedData}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
