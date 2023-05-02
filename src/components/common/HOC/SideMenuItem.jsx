import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SideMenuItem = ({ title, author, itemId }) => {
  return (
    <div
      className="w-full h-[65px] justify-between items-center flex 
              bg-[#353746] my-1 px-2 rounded-md cursor-pointer 
              transition ease-in-out hover:bg-[#1f212d]"
    >
      <div className="flex flex-col justify-around items-left text-[14px]">
        <span className="">{title}</span>
        <span className="text-[#6a6f95]">{author}</span>
      </div>
      <div className="flex justify-center items-center w-[30px] h-[30px] transition ease-in-out hover:bg-red-500">
        <FontAwesomeIcon icon={faX} />
      </div>
    </div>
  );
};

export default SideMenuItem;