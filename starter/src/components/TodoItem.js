import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo , completedTodo} from "../redux/todoslice"


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	
	const click = () => {
		console.log("클릭한 ID " + id);
		dispatch(deleteTodo({
			id : id
		}));
		
	}
    
	const checkcomplete = () => {
		console.log("클릭");
		dispatch(completedTodo({
			id : id,
			completed : !completed,
		}));
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={checkcomplete}></input>
					{title}
				</span>
				<button className='btn btn-danger'onClick={click} >Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
