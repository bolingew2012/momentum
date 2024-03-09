// index.js

// Momentum - A versatile platform designed to help users stay focused, organized, and motivated throughout their daily activities.

// Momentum functionality
class Momentum {
    constructor() {
        this.tasks = [];
        this.goals = [];
        this.habits = [];
    }

    // Method to add a new task
    addTask(taskName, deadline, category) {
        const task = {
            name: taskName,
            deadline: deadline,
            category: category
        };
        this.tasks.push(task);
    }

    // Method to add a new goal
    addGoal(goalName, description, deadline) {
        const goal = {
            name: goalName,
            description: description,
            deadline: deadline
        };
        this.goals.push(goal);
    }

    // Method to add a new habit
    addHabit(habitName, description) {
        const habit = {
            name: habitName,
            description: description
        };
        this.habits.push(habit);
    }

    // Method to display all tasks, goals, and habits
    displayActivities() {
        console.log("Tasks:");
        this.tasks.forEach(task => {
            console.log(`- ${task.name} (Category: ${task.category}, Deadline: ${task.deadline})`);
        });

        console.log("\nGoals:");
        this.goals.forEach(goal => {
            console.log(`- ${goal.name} (${goal.description}, Deadline: ${goal.deadline})`);
        });

        console.log("\nHabits:");
        this.habits.forEach(habit => {
            console.log(`- ${habit.name} (${habit.description})`);
        });
    }
}

// Example usage:
const momentumApp = new Momentum();

// Adding tasks
momentumApp.addTask("Finish Report", "March 15, 2024", "Work");
momentumApp.addTask("Go Grocery Shopping", "March 10, 2024", "Personal");

// Adding goals
momentumApp.addGoal("Exercise Regularly", "Exercise at least 3 times a week", "March 31, 2024");
momentumApp.addGoal("Learn Guitar", "Practice guitar for at least 30 minutes daily", "April 30, 2024");

// Adding habits
momentumApp.addHabit("Drink Water", "Drink at least 8 glasses of water daily");
momentumApp.addHabit("Read Before Bed", "Read for at least 20 minutes before going to bed");

// Displaying tasks, goals, and habits
momentumApp.displayActivities();
