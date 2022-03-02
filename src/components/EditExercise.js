import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';    // styling for the datepicker

class EditExercise extends React.Component {
    state = {
        users: ['Select'],
        userName: '',
        description: '',
        duration: '',
        date: new Date()
    };

    // react component life-cycle method
    componentDidMount = () => {
        axios.get('http://localhost:5000/exercise/edit')
            .then(res => {
                if(res.data.length > 0) {
                    let usersFromDB = this.state.users;
                    res.data.forEach(user => {
                        usersFromDB.push(user.name);
                    });

                    this.setState({
                        users: usersFromDB,
                    });
                }
            });

        axios.get(`http://localhost:5000/exercise/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    userName: res.data.userName,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date)
                });
            });
        
        console.log(this.props);
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    onChangeDate = (date) => {
        this.setState({
            date: date
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newExercise = {
            userName: this.state.userName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };
        
        axios.post(`http://localhost:5000/exercise/update/${this.props.match.params.id}`, newExercise)
            .then(res => {
                console.log(res.data);
                console.log(`${newExercise.userName}: ${newExercise.description} added!`);
            });

        // resetting the form
        this.setState({
            users: this.state.users,
            userName: this.state.users[0],
            description: '',
            duration: '',
            date: new Date()
        });

        // take back to home page
        // window.location = '/';
    }

    render() {
        console.log(this.props);

        return (
            <React.Fragment>
                <h1>Edit Exercise</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className='form-group'>
                        <label>User Name: </label>
                        <select
                            className='form-control'
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange}
                            required
                        >
                        {
                            this.state.users.map((user) => {
                                return (
                                    <option 
                                        key={user}
                                        value={user}
                                    >
                                        {user}
                                    </option>
                                );
                            })
                        }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Description: </label>
                        <input
                            className='form-control'
                            type='text'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="Add description"
                        />
                    </div>

                    <div className='form-group'>
                        <label>Duration (in months)</label>
                        <input
                            className='form-control'
                            type='number'
                            name='duration'
                            value={this.state.duration}
                            onChange={this.handleChange}
                            placeholder='Add duration'
                        />
                    </div>

                    <div className='form-group'>
                        <label>Date: </label>
                        <DatePicker
                            type='date'
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div><br/>
                    
                    <button className='btn btn-primary'>Update</button>
                </form>
            </React.Fragment>
        );
    }
}

export default EditExercise;