import React from 'react';
import axios from 'axios';

import Exercise from './Exercise';

class ExerciseList extends React.Component {
    state = {
        exercises: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/exercise/')
            .then(res => {
                this.setState({
                    exercises: res.data
                });
            });
    }

    onDelete = (id) => {
        const updatedExercises = this.state.exercises.filter(exercise => {
            if(exercise._id !== id)
                return exercise;
        });

        this.setState({
            exercises: updatedExercises
        });

        axios.delete(`http://localhost:5000/exercise/${id}`)
            .then(res => console.log('Deleted!'));
    }

    render = () => {
        const exerciseCompList = this.state.exercises.map(exercise => {
            return (
                <Exercise 
                    key={exercise._id} 
                    exercise={exercise} 
                    onDelete={this.onDelete}
                />
            );
        });

        return (
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Description</th>
                            <th>Duration (in months)</th>
                            <th>Date of creation</th>
                            <th>User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises.length > 0 ?
                            exerciseCompList :
                            <tr>
                                <td 
                                    colSpan={5} 
                                    style={{textAlign: 'center'}}
                                >
                                    No exercises available!'
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExerciseList;