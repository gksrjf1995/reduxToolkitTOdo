import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
	const completed = useSelector((state)=>{
		return  state.todos.filter((item)=>{
			return item.completed === true
		})
	});
	console.log(completed.length);

	return <h4 className='mt-3'>Total Complete Items: {completed.length}</h4>;
};

export default TotalCompleteItems;
