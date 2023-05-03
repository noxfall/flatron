import { useEffect, useState } from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NewTaskModal } from './';

const NewTask = ({ handleAddTodo, handleChange }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-center items-center 
    rounded-md bg-[#1f212d] w-full h-[65px] 
    cursor-pointer transition ease-in-out hover:bg-slate-800">
      <div
        onClick={toggleModal}
      >
        <FontAwesomeIcon icon={faPlus} />

      </div>
      <NewTaskModal open={open} handler={toggleModal} handleAddTodo={handleAddTodo} handleChange={handleChange} />
    </div>
  );
};

export default NewTask;