import React from "react";



export const headerData = [
  {
    header: 'Exercise Name',
    key: 'name',
  },
  {
    header: 'Category',
    key: 'category',
  },
  {
    header: 'Description',
    key: 'description',
  },
  {
    header: 'Completed',
    key: 'completed',
  },
];

export const mondayExercises = [
  {
    id:1,
    name: 'Squat',
    category: 'Legs',
    description: "Barbell Squat performed at Tempo",
    completed: false
  },
  {
    id:2,
    name: 'Standing Calf Raise',
    category: 'Legs',
    description: "Barbell exercise",
    completed: false
  },
  {
    id:3,
    name: 'Romanian Deadlift',
    category: 'Legs',
    description: "Barbell Exercise",
    completed: false
  },
  {
    id:4,
    name: 'Bulgarian Split Squat',
    category: 'Legs',
    description: "Dumbbell Exercise",
    completed: false
  },
  {
    id:5,
    name: 'Hip Thrust',
    category: 'Legs',
    description: "Barbell",
    completed: false
  },
  {
    id:6,
    name: 'Seated Calf Raise',
    category: 'Legs',
    description: "Barbell",
    completed: false
  },
];

export const wednesdayExercises = [
  {
    id:1,
    name: 'Bicep Curl',
    category: 'Bicep',
    description: "Barbell Squat performed at Tempo",
    completed: false
  },
  {
    id:2,
    name: 'Tricep Extension',
    category: 'Tricep',
    description: "Plate",
    completed: false
  },
  {
    id:3,
    name: 'Dumbbell Curls',
    category: 'Biceps',
    description: "Barbell Exercise",
    completed: false
  },
  {
    id:4,
    name: 'Tricep Dumbbell Extensions',
    category: 'Tricep',
    description: "Dumbbell Exercise",
    completed: false
  },
  {
    id:5,
    name: 'Concentration Curl',
    category: 'Bicep',
    description: "Dumbbell",
    completed: false
  },
  {
    id:6,
    name: 'Close Grip Benchpress',
    category: 'Tricep',
    description: "Barbell",
    completed: false
  },
  {
    id:7,
    name: 'Chin Up',
    category: 'Bicep',
    description: "Barbell",
    completed: false
  },

];

export const fridayExercises = [
  {
    id:1,
    name: 'Bench Press',
    category: 'Chest',
    description: "Barbell",
    completed: false
  },
  {
    id:2,
    name: 'Deadlift',
    category: 'Back',
    description: "Barbell",
    completed: false
  },
  {
    id:3,
    name: 'Incline Bench Press',
    category: 'Chest',
    description: "Dumbbell",
    completed: false
  },
  {
    id:4,
    name: 'Bent Over Row',
    category: 'Back',
    description: "Barbell Exercise",
    completed: false
  },
  {
    id:5,
    name: 'Dumbbell Crossover',
    category: 'Chest',
    description: "Dumbbell",
    completed: false
  },
  {
    id:6,
    name: 'Pull Up',
    category: 'Back',
    description: "Body weight",
    completed: false
  },
];

export const saturdayExercises = [
  {
    id:1,
    name: 'Overhead Press',
    category: 'Shoulders',
    description: "Barbell",
    completed: false
  },
  {
    id:2,
    name: 'Sidelying External Rotation',
    category: 'Shoulders',
    description: "Dumbbell",
    completed: false
  },
  {
    id:3,
    name: 'Hanging Knee Raises',
    category: 'Core',
    description: "Body",
    completed: false
  },
  {
    id:4,
    name: 'Shrug',
    category: 'Shoulders',
    description: "Dumbbell",
    completed: false
  },
  {
    id:5,
    name: 'Laying Plank Crunch',
    category: 'Core',
    description: "Body",
    completed: false
  },
  {
    id:6,
    name: 'Oblique Crunch',
    category: 'Core',
    description: "Body",
    completed: false
  },
  {
    id:7,
    name: 'Plank',
    category: 'Core',
    description: "Body",
    completed: false
  },
];

export const recoveryExercises = [
  {
    id:1,
    name: 'Hip Stretch',
    category: 'Hip',
    description: "Body",
    completed: false
  },
  {
    id:2,
    name: 'Lower Back Stretches',
    category: 'Back',
    description: "Body",
    completed: false
  },
  {
    id:3,
    name: 'Yoga Session',
    category: 'Core',
    description: "Body",
    completed: false
  },
];


export const workoutRoutines = {
  Monday:mondayExercises,
  Wednesday:wednesdayExercises,
  Friday:fridayExercises,
  Saturday:saturdayExercises,
  Recovery:recoveryExercises
}

export const getWorkOutRoutine = (day) => {
  return workoutRoutines[day]
}