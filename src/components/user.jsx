import React from "react";
import Quality from "./quality";
import quality from "./quality";
import Bookmark from "./bookmark";

const User = ({_id, name, profession, completedMeetings, rate, onDelete, qualities, bookmark, onToggleBookmark}) => {
  return (
  <tr key={_id}>
    <td>{name}</td>
    <td>
      {qualities.map((item) => (
        <Quality color={item.color} key={item._id} name={item.name}/>
      ))}
    </td>
    <td>{profession.name}</td>
    <td>{completedMeetings}</td>
    <td>{rate} /5</td>
    <td><Bookmark onClick={() => onToggleBookmark(_id)} status={bookmark}/></td>
    <td>
      <button
        onClick={() => onDelete(_id)}
        className="btn btn-danger"
      >
        delete
      </button>
    </td>
  </tr>
  )
};

export default User;