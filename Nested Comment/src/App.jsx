import React from "react";
import CommentBox from "./components/CommentBox";
import "./App.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import useCommentAction from "./Hooks/useCommentAction";

const App = () => {
  const allMessage = useSelector((state) => state.message.list);
  const { handleSubmit, handleChange, data } = useCommentAction();
  return (
    <>
      <Header />
      <div className="upper_hero_section">
        <h1>comments</h1>
        <div>
          <form onSubmit={()=>{
            handleSubmit('')}} className="input-area">
            <input
              onInput={(e) => {
                handleChange(e);
              }}
              type="text"
              value={data}
            />
            <button onClick={(e)=>{  e.preventDefault();
            handleSubmit('')}}>Add</button>
          </form>
        </div>
        <div className="messages">
          {(allMessage.length===0)?<div style={{Color:'#dadada',fontSize:'2rem',textAlign:'center',opacity:0.5}}>No Messages Yet</div>:[...allMessage].reverse().map(({ id, message, reply,replies }) => (
            <CommentBox key={id} id={id} reply={reply} message={message} replies={replies} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
