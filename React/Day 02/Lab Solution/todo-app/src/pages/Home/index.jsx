import { useState } from "react";
import Task from "../../components/Task";

class TaskC {
  id;
  description;
  isComplete;
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.isComplete = false;
  }
}
function Home() {
  const tasksDB = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(tasksDB) ?? []);

  const [errorMsg, setErrorMsg] = useState("");
  const [completeMsg, setCompleteMsg] = useState("");
  const [deleteMsg, setDeleteMsg] = useState("");

  function addTask(taskDescripiton) {
    if (taskDescripiton == "") return setErrorMsg("Empty Task ❌❌");

    let index = tasks.findIndex(
      (t) => t.description.toLowerCase() == taskDescripiton.toLowerCase(),
    );
    if (index != -1) return setErrorMsg("Task already exists ⚠⚠");

    setErrorMsg("");
    const newTask = new TaskC(Date.now(), taskDescripiton);
    let newTasksList = [...tasks, newTask];
    setTasks(newTasksList);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
  }

  function deleteTask(id) {
    const updatedTasksList = tasks.filter((t) => t.id != id);
    setTasks(updatedTasksList);
    localStorage.setItem("tasks", JSON.stringify(updatedTasksList));
    setErrorMsg("");
    setDeleteMsg("Task Deleted Successfully ❎❎");
    setTimeout(() => {
      setDeleteMsg("");
    }, 1000);
  }

  function completeTask(id) {
    const updatedTasksList = tasks.map((t) => {
      if (t.id == id && t.isComplete != true) {
        t.isComplete = true;

        setErrorMsg("");
        setCompleteMsg("Great work 🎯🐱‍🏍🎉");
        setTimeout(() => {
          setCompleteMsg("");
        }, 1000);

        return t;
      }
      return t;
    });

    setTasks(updatedTasksList);
    localStorage.setItem("tasks", JSON.stringify(updatedTasksList));
  }

  return (
    <>
      <div className="max-auto">
        <div className="bg-blue-200 py-4 flex justify-center self-stretch">
          <div className="max-w-md flex flex-col justify-center items-center w-full">
            <h1 className="mb-5 text-4xl font-bold text-blue-500">TO-DO APP</h1>

            <input
              type="text"
              placeholder="Enter a task"
              className="input input-primary mb-4"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            {errorMsg != "" && (
              <span className="text-red-600 text-xl font-bold mb-3">
                {errorMsg}
              </span>
            )}
            {completeMsg != "" && (
              <span className="text-green-500 text-xl font-bold mb-3">
                {completeMsg}
              </span>
            )}
            {deleteMsg != "" && (
              <span className="text-green-500 text-xl font-bold mb-3">
                {deleteMsg}
              </span>
            )}

            <button
              className="btn btn-primary"
              onClick={() => {
                const taskInput = document.querySelector("input");
                addTask(taskInput.value);
                taskInput.value = "";
              }}
            >
              Add Task
            </button>
          </div>
        </div>
        <div>
          {tasks.map((t) => {
            return (
              <Task
                key={t.id}
                task={t}
                completeHandler={completeTask}
                deleteHandler={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
