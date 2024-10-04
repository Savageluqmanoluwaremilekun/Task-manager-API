const Tasks = require("./model");

async function createTask ( req, res ) {
    try {
        const {task, completed } = req.body;
        if (!task || !completed) {
            return res.status(404).json({message: "Please provide all fields"})
            
        };
        const newTask = new Tasks({task, completed});
        const savedTask = await newTask.save();
        res.status(201).json({message: "Task successfully added", savedTask})
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }


};

async function getAllTask ( req,res ) {
    try {
        const allTasks = await Tasks.find();
        res.status(200).json({allTasks});
    } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    }

};

async function getOneTask ( req,res ) {
    const tasksID = req.params.id
    try {
        const task = await Tasks.findById(tasksID);
        if(!task){
            return res.status(404).json({message: "Task does not exist"})
        };
        res.status(200).json({task})

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

async function updateTask ( req,res ) {
    const tasksID = req.params.id;
    const { task, completed } = req.body;
    const findTask = await Tasks.findById(tasksID);
    try {
        if (!findTask) {
            return res.status(404).json({message: "Task not found"})
        };
        const updateTask = await Tasks.findByIdAndUpdate(tasksID, { task, completed });

        res.status(200).json({message: "Updated successfully", updateTask});


    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

async function deleteTask ( req,res ) {
    const tasksID = req.params.id;
    try {
        const findTask = await Tasks.findById(tasksID);
        if (!findTask) {
            return res.status(404).json({message: "Task not found"})
        };
        const deleteTask = await Tasks.findByIdAndDelete(tasksID)
        res.status(200).json({message: "Successfully deleted", deleteTask});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createTask,
    getAllTask,
    getOneTask,
    updateTask,
    deleteTask
};