import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = (props) => {
    return (
        <tr className='table-row'>
            <td>{ props.exercise.userName }</td>
            <td>{ props.exercise.description }</td>
            <td>{ props.exercise.duration }</td>
            <td>{ props.exercise.date.substring(0,10) }</td>
            <td>
                <Link
                    style={{textDecoration:'none', color:'white'}}
                    to={`/edit/${props.exercise._id}`}
                >
                    <button className='btn btn-dark'>                    
                        Edit
                    </button>
                </Link>
                &nbsp;
                <button 
                    className='btn btn-danger'
                    onClick={() => props.onDelete(props.exercise._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Exercise;