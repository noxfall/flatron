import { useDispatch } from 'react-redux';
import { Scene, SideContainer } from "../../components/common/HOC";
import { NewTask } from "../../components";
import { addTodo, delTodo } from '../../utils/redux/todoSlice';

import SideMenuItem from "../../components/common/HOC/SideMenuItem";
import { useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const todos = JSON.parse(localStorage.getItem('todos'));
  const [currTodos, setCurrTodos] = useState([]);
  const dispatch = useDispatch();

  const handleDelTodo = (todo) => {
    dispatch(delTodo(todo));
    const newTodos = todos.filter((i) => i.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setCount(count + 1);
  };

  const handleAddTodo = (e) => {

    e.preventDefault();
    if (title) {
      dispatch(addTodo({ id: todos.length + 1, author: `REDUX #${todos.length + 1}`, title: title }));
      todos ?
        localStorage.setItem('todos', JSON.stringify([...todos, { id: todos.length + 1, author: `REDUX #${todos.length + 1}`, title: title }]))
        : localStorage.setItem('todos', JSON.stringify([{ id: todos.length + 1, author: `REDUX #${todos.length + 1}`, title: title }]));
      setTitle('');
    }
    setCount(count + 1);
  };

  useEffect(() => {
    setCurrTodos(todos);
  }, [count])

  return (
    <Scene flexFlow="row" justify="between">
      <div>Home</div>
      <div>Home</div>
      <SideContainer menuTitle="Todo">
        {currTodos.length > 0 ? (currTodos.map((item, index) => (
          <SideMenuItem title={item.title} author={item.author} key={index} delTodo={() => handleDelTodo(item)} />
        ))) : (
          <div></div>
        )}
        <NewTask handleAddTodo={handleAddTodo} title={title} handleChange={(e) => setTitle(e.target.value)} />
      </SideContainer>
    </Scene>
  );
};

export default Home;