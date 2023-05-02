import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const SearchBoxContainer = () => {
  return (
    <div className="flex items-center flex-grow pl-10">
      <button className="px-2 w-[30px] h-30px text-[20px]">
        <FontAwesomeIcon icon={faBookmark} />
      </button>
      <input
        type="text"
        placeholder="Discover"
        className="w-full h-[30px] bg-[#1f212d] outline-none font-[16px] px-[1em]"
      />
    </div>
  );
};

export default SearchBoxContainer;