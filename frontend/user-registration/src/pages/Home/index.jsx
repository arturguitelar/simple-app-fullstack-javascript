import { useEffect, useState, useRef } from 'react';
import './style.css';
import ReactIcon from '../../assets/react.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/users');
    setUsers(usersFromApi.data);
    clearForm();
  }

  async function createUser() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    await getUsers();
  }

  async function removeUser(id) {
    await api.delete(`/users/${id}`);

    await getUsers();
  }

  function clearForm() {
    inputName.current.value = '';
    inputAge.current.value = '';
    inputEmail.current.value = '';
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
        <input type="text" name="name" placeholder="Name" ref={inputName} />
        <input type="text" name="age" placeholder="Age" ref={inputAge} />
        <input type="text" name="email" placeholder="Email" ref={inputEmail} />
        <button type="button" onClick={createUser}>
          Send
        </button>
      </form>

      {users.map((user) => (
        <div className="result" key={user.id}>
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button onClick={() => removeUser(user.id)}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
