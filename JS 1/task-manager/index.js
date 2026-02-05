let task = "";
let completedTaskCount = 0;

function showTask() {
    if (!task) {
        console.log("Задача отсутствует");
    } else {
        console.log(task)
    }
}

function setTask(taskDescription) {
    if (!taskDescription) {
        console.log("Нельзя добавить пустую задачу")
        return;
    }
    if (task) {
        console.log("Не могу добавить задачу, завершите или удалите предыдущую");
        return;
    } else {
        task = taskDescription;
        console.log(task)
    }
}

function completeTask() {
    if (task) {
        task = "";
        completedTaskCount++;
    } else {
        console.log("Нет задачи для выполнения")
    }
}

function deleteTask() {
    if (task) {
        task = "";
    } else {
        console.log("Нет задач для удаления")
    }
}
