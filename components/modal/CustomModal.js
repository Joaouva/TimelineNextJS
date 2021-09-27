import React, { useState } from "react";
import ApiService from "../../utils/api"
import Link from "next/link";

function CustomModal(props) {
  const { updateData, error } = ApiService();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [success, setSuccess] = useState("");
  const { modalData, setIsOpen } = props;

  const updateItem = (e) => {
    e.preventDefault();
    setId(modalData.id);
    updateData(id, title, body);
    if (!error) {
      setSuccess("Successfully updated item");
    }
    setTimeout(() => {
      if (error) {
        console.log(error);
      } else {
        console.log("no error");
        setIsOpen(false);
      }
    }, 2000);
  };

  return (
      <div>
        <form>
          <input placeholder={modalData.id} />
          <input
            type="text"
            name="title"
            placeholder={modalData.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            name="body"
            placeholder={modalData.body}
            onChange={(event) => setBody(event.target.value)}
          />
          <button disabled={!title + !body} onClick={updateItem}>
            Submit
          </button>
          {error ? <div>{error}</div> : <div>{success}</div>}
        </form>
      </div>
   
  );
}

export default CustomModal;
