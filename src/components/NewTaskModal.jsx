import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, Card, CardHeader, CardBody, Button, Input } from '@material-tailwind/react';
import { addTodo } from '../utils/redux/todoSlice';

const NewTaskModal = ({ open, handler, handleAddTodo, handleChange, title }) => {
  const [currTodos, setCurrTodos] = useState([]);
  const todos = JSON.parse(localStorage.getItem('todos'));
  const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open={open}
        handler={handler}
        variant="gradient"
        className="bg-[#2c2e3a]"
      >
        <Card className="flex justify-center items-center bg-[#2c2e3a] h-[300px]">
          <CardHeader className="text-[24px] bg-transparent shadow-none text-center text-[#818eb6]">New Task</CardHeader>
          <CardBody className="px-2">
            <form className="flex flex-col justify-between items-center relative" onSubmit={handleAddTodo}>
              <Input variant="standard" label="Title" className="text-[#e0e3ed]" value={title} onChange={handleChange} />
              <div className="pt-[2em]">
                <Button
                  type="submit"
                  variant="gradient"
                  color="green"
                  className="mr-1"
                  onClick={handler}
                >
                  <span>Confirm</span>
                </Button>
                <Button variant="gradient" color="red" onClick={handler}>
                  <span>Cancel</span>
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </div>
  );
};

export default NewTaskModal;