import Clock from './Clock';
import Navigation from "./Navigation";
import SearchBoxContainer from "./SearchBoxContainer";
import UserMenuContainer from './UserMenuContainer';

const TopBar = () => {

  return (
    <nav className="flex flex-row justify-between items-center absolute top-0 w-full h-[50px] pr-2">
      <Navigation />
      <SearchBoxContainer />
      <Clock />
      <UserMenuContainer />
    </nav>
  );
};

export default TopBar;