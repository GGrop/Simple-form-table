import './App.css';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import Table from './Table'


const users=[
  {id:1,user:'pepito',phone:325451,email:'pepe@gmail.com'},
  {id:2,user:'josesito',phone:5052454,email:'jose@gmail.com'},
]

function App() {
  const [user, setUser] = useState([])

  const [addUser,setAddUser]=useState({
    user:'',phone:'',email:''
  })

  const handleChange=(e)=>{
    e.preventDefault();
    const fieldName=e.target.getAttribute('name');
    const fieldValue= e.target.value;
    const newFormData={...addUser};
    newFormData[fieldName]=fieldValue;
    setAddUser(newFormData)
  }

  const handleAddForm=(e)=>{
    e.preventDefault();
    const newUser={
      id:nanoid(),
      user:addUser.user,
      phone:addUser.phone,
      email:addUser.email,
    };
    const newFormData=[...user,newUser];
    setUser(newFormData);
    // setUser(newFormData.sort((a,b)=>{
    //   return a.user.localeCompare(b.user)
    // }));
  }
  // console.log(addUser)
  console.log(user)
  console.log(users)
  return (
    <div className="App">
      <table className='table'>
        <thead>
          <tr>
            <th className='slot'>Name</th>
            <th className='slot'>Phone</th>
            <th className='slot'>Email</th>
          </tr>
        </thead>
        <tbody>
          <Table user={user}/>
        </tbody>
      </table>
      <h2>Add a User</h2>
      <form onSubmit={handleAddForm}>
        <input
          type="text"
          name="user"
          placeholder="enter your name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="enter your phone"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          required
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
