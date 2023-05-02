import { TopBar, SidebarLeft } from "./components/common";
import { Home } from "./scenes";

const App = () => {
  return (
    <main className="app">
      <TopBar />
      <SidebarLeft />
      <Home />
    </main>
  );
};

export default App;