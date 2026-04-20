const tasks = [];

let completedTaskCount = 0;


function setTask(title, description = "Описание отсутствует") {
    if (!title) {
        console.log("Нельзя добавить пустую задачу")
        return;
    }
    const task = {
        title: title,
        description: description,
        isCompleted: false,
        createdDate: new Date().toDateString(),
        completedDate: null
    }
    tasks.push(task)

}

function showTask() {
    if (tasks.length === 0) {
        console.log("Задачи отсутствуют");
    } else {
        tasks.forEach((task) => { console.log(`title: ${task.title},description: ${task.description},isCompleted: ${task.isCompleted},createdDate: ${task.createdDate},completedDate: ${task.completedDate}`) })
    }
}

function completeTask(index) {
    if (index < 0 || index >= tasks.length || tasks[index].isCompleted || typeof index !== "number") {
        console.log("Введите корректный индекс задачи или задача уже выполнена")
        return;
    }
    tasks[index].isCompleted = true;
    tasks[index].completedDate = new Date().toDateString();
    completedTaskCount++;
    return tasks[index];

}


function deleteTask(index) {
    let result;
    if (index < 0 || index >= tasks.length) {
        console.log("Неверный индекс");
        return
    }
    if (!tasks[index].isCompleted) {
        result = confirm("Таска ещё не выполнена, удалить?");
        if (result) {
            tasks.splice(index, 1);
            console.log("Задача удалена");
            return;
        } else {
            console.log("Задача не удалена");
        }
    } else {
        tasks.splice(index, 1);

        console.log("Задача удалена");
    }
}



function clearTasks() {
    if (tasks.length > 0) { tasks.length = 0 }
    else { console.log("Нет задач для очищения") }

}
