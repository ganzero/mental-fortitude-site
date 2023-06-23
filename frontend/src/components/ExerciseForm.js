import { useState } from "react";

const ExerciseForm = ({exercises, title}) => {
    const [type, setType] = useState('');    
    const [name, setName] = useState('');
    const [rounds, setRounds] = useState('')
    const [duration, setDuration] = useState('')
    const [distance, setDistance] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        let sets = {rounds, duration, distance, reps, weight}
        let data = {type, name, sets}
        exercises(data)
        setType('')
        setName('')
        setRounds('')
        setDuration('')
        setDistance('')
        setReps('')
        setWeight('')
        alert("Exercise added to workout, add more if you need")
    }


    //Maybe when exercise is added, display it in a table below for reference similar to the one in SingleWorkout.js

    return(
        <div className="exercise-form">
            <form className="create">
                <label>Type of Exercise (Lift, Cardio)</label>
                <input 
                type="text" 
                onChange={(e) => setType(e.target.value)}
                value={type}
                />

                <label>Name of Exercise</label>
                <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />

                <label>Number of Rounds for Exercise</label>
                <input type="number" 
                onChange={(e) => setRounds(e.target.value)}
                value={rounds}
                />

                <label>Duration of exercise in minutes</label>
                <input 
                type="number" 
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                />

                <label>Distance for exercise</label>
                <input 
                type="number" 
                onChange={(e) => setDistance(e.target.value)}
                value={distance}
                />

                <label>Reps for exercise</label>
                <input 
                type="number" 
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                />

                <label>Weight for exercise</label>
                <input 
                type="number" 
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                />

                <button onClick={handleClick}>Add Exercise</button>
            </form>
        </div>
    )
}
export default ExerciseForm;