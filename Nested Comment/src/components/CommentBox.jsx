import React from "react";
import account from "../Assets/account.svg";
import style from "./commentBox.module.css";
import useCommentAction from "../Hooks/useCommentAction";

function CommentBox({ id, message, reply, replies, level=0 }) {
  const { deleteMsg, handleReplyState, handleSubmit, handleChange, data } =
    useCommentAction();

  return (
    <>
    <div className={style["comment-container"]} style={{marginLeft:`${level*40}px`}}>
      <div className={style.logo}>
        <img src={account} alt="logo" />
      </div>
      <div className={style.message_container}>
        <h2 className={style.message}>{message}</h2>
        <div className={style.data_query}>
          {!reply ? (
            <button
              onClick={() => {
                handleReplyState(id);
              }}
            >
              reply
            </button>
          ) : (
            <form onSubmit={(e)=>{
              e.preventDefault()
              handleSubmit(id);
              handleReplyState(id)
            }} className={style["edit-container"]}>
              <input
                type="text"
                onInput={(e) => {
                  handleChange(e);
                }}
                value={data}
                autoFocus
              />
              <button onClick={
                (e)=>{
                  e.preventDefault()
                  handleSubmit(id);
                  handleReplyState(id)
                }
              }>add</button>
              <button
                onClick={() => {
                  handleReplyState(id);

                }}
              >
                cancel
              </button>
            </form>
          )}

          <button
            onClick={() => {
              deleteMsg(id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    </div>
    {
      [...replies]?.reverse().map(({id,message,reply,replies})=><CommentBox key={id} id={id} message={message} reply={reply} replies={replies} level={level+1} />)
    }
    </>
  );
}

export default CommentBox;
