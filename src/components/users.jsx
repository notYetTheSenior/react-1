import React, {useState} from "react";
import api from "../API";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = userId => {
    setUsers(users.filter(user => user._id !== userId));
  };
  const renderPhrase = number => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанет";
    return "человек тусанет";
  };
  return (
    <>
      <div className={users.length > 0 ? 'btn btn-primary' : 'btn btn-danger'}>
        <span className='phrase'>{users.length > 0 ? users.length + ' ' + renderPhrase(users.length) + 'с тобой сегодня' : 'никто не тусанёт с тобой сегодня'}</span>
      </div>
      {users.length > 0 ? <table className='table'>
        <thead>
        <tr className='first-row'>
          <th scope="col">Номер</th>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Действие</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, id) => (
          <tr key={id}>
            <th>{id+1}</th>
            <th>{user.name}</th>
            <th>{user.qualities.map((qual, index) => (
              <span key={index} className={"badge bg-"+(qual.color)}>{qual.name}</span>
            ))}</th>
            <th>{user.profession.name}</th>
            <th>{user.completedMeetings}</th>
            <th>{user.rate + '/5'}</th>
            <th>
              <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button>
            </th>
          </tr>
        ))}
        </tbody>
      </table> : <div className='instead-of-table'></div>}

    </>
  );
};

export default Users;