import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <div className='container'>
                        <Navbar />
                        <br/>
                        <Routes>
                            <Route exact path='/' element={<ExerciseList />} />
                            <Route exact path='/edit/:id' element={<EditExercise />} />
                            <Route exact path='/create' element={<CreateExercise />} />
                            <Route exact path='/user' element={<CreateUser />} />
                        </Routes>
                    </div>
                </Router>
            </>
        );
    }
}

export default App;