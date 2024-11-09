"use client";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

function TodoApp() {
    // useState hooks for initial states
    const [todos, setTodo] = useState<{ task: string; id: number }[]>([]);
    const [inputTask, setInput] = useState("");
    const [id, setId] = useState(1);

    // Function to add a new todo
    const addTodo = () => {
        if (!inputTask.trim()) return; // Prevent adding if input is empty

        const foundTodo = todos.find(item => item.id === id); // Find the todo with the same ID
        if (foundTodo) {
            // Edit existing todo
            const newArray = todos.map(item => item.id === id ? { task: inputTask, id } : item);
            setTodo(newArray);
            setId(todos.length + 1); // Reset ID to prevent overwrite on new todo creation
        } else {
            // Add new todo
            setTodo([...todos, { task: inputTask, id }]);
            setId(id + 1); // Increment ID for the next todo
        }
        setInput("");
    };

    // Function to edit todo
    const editTodo = (id: number) => {
        const foundTodo = todos.find(item => item.id === id); // Find the todo
        if (foundTodo) {
            setInput(foundTodo.task);
            setId(foundTodo.id);
        }
    };

    // Function to delete todo
    const deleteTodo = (id: number) => {
        const newArray = todos.filter(item => item.id !== id);
        setTodo(newArray);
    };

    return (
        <div>
            <h1 className="text-center text-[40px] underline text-indigo-700 decoration-dotted">My To-Do App</h1>
            <div className="flex gap-4 mt-5 justify-center">
                <input
                    className="w-[80%] ml-3 shadow-md shadow-blue-500 text-lg bg-gray-200 hover:shadow-none text-gray-800 border-b focus:ring-2 px-4 focus:ring-blue-600 focus:outline-none rounded-full"
                    placeholder="Add some ToDo task...."
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()} // Add todo on Enter key press
                />
                <button className="btn bg-blue-600 text-gray-100 shadow-md shadow-orange-600 hover:shadow-none rounded-full hover:bg-blue-800" onClick={addTodo}>
                    Add ToDo
                </button>
            </div>
            <h1 className="mt-10 text-center text-indigo-700 text-[40px] underline decoration-dotted">To-Do List</h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
                {todos.map((item, i) => (
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg shadow-black relative text-white" key={item.id}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <button
                      className="text-red-400 text-2xl font-bold hover:text-red-500 transition duration-300"
                      onClick={() => deleteTodo(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">{item.task}</h2>
                    <button
                      onClick={() => editTodo(item.id)}
                      className="text-green-400 font-semibold hover:text-green-600 transition duration-300 self-end"
                    >
                      <FaRegEdit />
                    </button>
                  </div>
                </div>
                
                ))}
            </div>
        </div>
    );
}

export default TodoApp;
