import { useSelector, useDispatch } from 'react-redux';
import { Scene, SideContainer } from "../../components/common/HOC";
import { NewTask } from "../../components";
import { delTodo } from '../../utils/redux/todoSlice';

import SideMenuItem from "../../components/common/HOC/SideMenuItem";

const Home = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelTodo = (todo) => {
    dispatch(delTodo(todo))
    const newTodos = todos.filter((i) => i.id !== todo.id);
  };

  return (
    <Scene flexFlow="row" justify="between">
      <div>Home</div>
      <div>Home</div>
      <SideContainer menuTitle="Todo">
        {todos.length > 0 ? (todos.map((item, index) => (
          <SideMenuItem title={item.title} author={item.author} key={index} delTodo={() => handleDelTodo(item)} />
        ))) : (
          <div></div>
        )}
        <NewTask />
      </SideContainer>
    </Scene>
  );
};

export default Home;