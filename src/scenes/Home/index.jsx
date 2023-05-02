import { useSelector } from 'react-redux';
import { Scene, SideContainer } from "../../components/common/HOC";
import { NewTask } from "../../components";

import SideMenuItem from "../../components/common/HOC/SideMenuItem";

const Home = () => {
  const { todos } = useSelector((state) => state.todos)

  return (
    <Scene flexFlow="row" justify="between">
      <div>Home</div>
      <div>Home</div>
      <SideContainer menuTitle="Todo">
        {todos.length > 0 ? (todos.map((item, index) => (
          <SideMenuItem title={item.title} author={item.author} key={index} />
        ))) : (
          <div></div>
        )}
        <NewTask />
      </SideContainer>
    </Scene>
  );
};

export default Home;