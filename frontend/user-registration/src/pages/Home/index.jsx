import { useEffect, useState } from 'react';
import './style.css';
import ReactIcon from '../../assets/react.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const usersFromApi = await api.get('/users');
    setUsers(usersFromApi.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>
          <img src={ReactIcon} />
          Register
        </h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <input type="text" name="email" placeholder="Email" />
        <button type="button">Send</button>
      </form>

      {users.map((user) => (
        <div className="result" key={user.id}>
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>remove</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
