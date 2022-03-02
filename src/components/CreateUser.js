import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name
        }
        
        
        // fetch('http://localhost:5000/user/add', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // })
        //     .then(res => window.alert(`${newUser.name} added!`));

        axios.post('http://localhost:5000/user/add', newUser)
            .then(res => console.log(res.data));

        // reset the form
        this.setState({
            name: ''
        });

        alert(`${newUser.name} added!`);

        // window.location = '/';
    }

    render() {
        return (
            <div>
                <h1>Create User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input
                            className='form-control'
                            type='text'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div><br/>

                    <button className='btn btn-primary'>Create</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;