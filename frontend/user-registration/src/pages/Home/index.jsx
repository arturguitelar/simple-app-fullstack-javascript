import './style.css';
import ReactIcon from '../../assets/react.svg';

function Home() {
  const users = [
    {
      id: 1,
      name: 'asdasdsad',
      age: '15',
      email: 'asas@wqwqw.com',
    },
    {
      id: 2,
      name: 'asdasdsad',
      age: '15',
      email: 'asas@wqwqw.com',
    },
    {
      id: 2,
      name: 'asdasdsad',
      age: '15',
      email: 'asas@wqwqw.com',
    },
  ];
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
