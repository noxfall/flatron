import { Scene, SideContainer } from "../../components/common/HOC";
import { NewTask } from "../../components";
import { todos } from "../../mockDb";

const Home = () => {
  return (
    <Scene flexFlow="row" justify="between">
      <div>Home</div>
      <div>Home</div>
      <SideContainer menuTitle="Todo">

        <NewTask />
      </SideContainer>
    </Scene>
  );
};

export default Home;