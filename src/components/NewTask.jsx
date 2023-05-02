import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewTask = () => {
  return (
    <div className="flex justify-center items-center bg-[#1f212d] w-full h-[65px] cursor-pointer transition ease-in-out hover:bg-slate-800">
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default NewTask;