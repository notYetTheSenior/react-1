import logo from './logo.svg';
import './App.css';
import Users from "./components/users";
import React, {useState} from "react";
import API from "./API";
import RenderPhrase from "./components/renderPhrase";

function App() {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };
  return (
    <>
      <RenderPhrase length={users.length}/>
      <Users users={users} onDelete={handleDelete} onToggleBookmark={handleToggleBookmark}/>
    </>
  );
}

export default App;