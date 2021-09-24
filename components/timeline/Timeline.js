import Post from "../post/post";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CustomModal from "../modal/CustomModal";
import ApiService from "../../utils/api";

import styles from "./Timeline.module.scss";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Timeline() {
  const { response, loading } = ApiService();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(9);
  const [firstElement, setFirstElement] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState("");
  const [orderedList, setOrderedList] = useState("asc");
  const [dateOrder, setDateOrder] = useState("asc");
  const [modalData, setModalData] = React.useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response, data]);

  const nextPage = () => {
    setCount(count + 9);
    setFirstElement(firstElement + 9);
  };

  const prevPage = () => {
    setCount(count - 9);
    setFirstElement(firstElement - 9);
  };

  const sort = () => {
    if (orderedList === "asc") {
      setOrderedList("desc");
    } else {
      setOrderedList("asc");
    }
  };

  const sortByDate = () => {
    if (dateOrder === "asc") {
      setDateOrder("desc");
      console.log(dateOrder);
    } else {
      setDateOrder("asc");
      console.log(dateOrder);
    }
  };

  useEffect(() => {
    let orderedByDate = [...data];
    if (dateOrder === "asc") {
      orderedByDate.sort((a, b) =>
        a.date_of_post < b.date_of_post
          ? 1
          : b.date_of_post < a.date_of_post
          ? -1
          : 0
      );
      setFilteredPosts(orderedByDate);
    } else {
      orderedByDate.sort((a, b) =>
        a.date_of_post > b.date_of_post
          ? 1
          : b.date_of_post > a.date_of_post
          ? -1
          : 0
      );
      setFilteredPosts(orderedByDate);
    }
  }, [dateOrder, data]);

  useEffect(() => {
    if (search === "") {
      setFilteredPosts(data);
    } else {
      let visiblePosts = [...data].filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredPosts(visiblePosts);
    }
  }, [data, search]);

  useEffect(() => {
    if (searchId === "") {
      setFilteredPosts(data);
    } else {
      let visiblePosts = [...data].filter((post) => {
        let id = post.id.toString();
        console.log(searchId);
        return id.includes(searchId);
      });
      if (orderedList === "desc") {
        visiblePosts.reverse();
        setFilteredPosts(visiblePosts);
      } else {
        setFilteredPosts(visiblePosts);
      }
    }
  }, [data, searchId, orderedList]);

  const openModal = (postData) => {
    setModalData(postData);
    console.log(postData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postheader}>
        <h1>Our posts</h1>
        <div className={styles.searchbars}>
          <input
            type="text"
            name="search"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search title"
          />
          <input
            type="text"
            name="searchId"
            placeholder="Search by id"
            onChange={(event) => setSearchId(event.target.value)}
          />
          {orderedList === "asc" ? (
            <button className={styles.orderbtn} onClick={sort}>
              Desc↓
            </button>
          ) : (
            <button className={styles.orderbtn} onClick={sort}>
              Asc↑
            </button>
          )}
          <button onClick={sortByDate}>Order by date</button>
        </div>
      </div>

      <div className={styles.postcontainer}>
        {filteredPosts.slice(firstElement, count).map((item, index) => {
          return (
            <div
              className={styles.postbody}
              key={index}
              onClick={() => {
                openModal(item);
              }}
            >
              <Post post={item} />
            </div>
          );
        })}
      </div>

      {count > 9 && count < data.length ? (
        <div className={styles.pagination}>
          <button onClick={prevPage}>Prev</button>
          <button className="next-button" onClick={nextPage}>
            Next
          </button>
        </div>
      ) : count < 10 && count < data.length ? (
        <div className={styles.pagination}>
          <button className={styles.nextbutton} onClick={nextPage}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <button onClick={prevPage}>Prev</button>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Minimal Modal Example"
        style={customStyles}
        ariaHideApp={false}
        shouldCloseOnEsc={true}
        onRequestClose={closeModal}
      >
        <CustomModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          modalData={modalData}
        />
      </Modal>
    </div>
  );
}
