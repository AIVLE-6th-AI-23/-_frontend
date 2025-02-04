"use client";

import { useState } from "react";
import styles from "@/styles/project.module.css";
import { useDarkMode } from "@/hooks/useDarkMode";
import type { JSX } from "react";

export default function Project(): JSX.Element {
  const { isDarkMode } = useDarkMode();

  const [tasks, setTasks] = useState([
    {
      column: "To do",
      tasks: [
        {
          title: "Project A",
          description:
            "Plan and create the user flow for onboarding. Include wireframes and presentation slides.",
          assignees: ["AB", "CD"],
          isEditing: false,
        },
      ],
    },
    {
      column: "In progress",
      tasks: [
        {
          title: "Project B",
          description:
            "Refine the designs for the mobile version of the landing page and test on different devices.",
          assignees: ["EF", "GH"],
          isEditing: false,
        },
      ],
    },
  ]);

  const addTask = (columnIndex: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[columnIndex].tasks.push({
      title: "",
      description: "New task description",
      assignees: [],
      isEditing: true,
    });
    setTasks(updatedTasks);
  };

  const updateTaskTitle = (columnIndex: number, taskIndex: number, newTitle: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[columnIndex].tasks[taskIndex].title = newTitle;
    setTasks(updatedTasks);
  };

  const toggleEdit = (columnIndex: number, taskIndex: number, editing: boolean) => {
    const updatedTasks = [...tasks];
    updatedTasks[columnIndex].tasks[taskIndex].isEditing = editing;
    setTasks(updatedTasks);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, columnIndex: number, taskIndex: number) => {
    if (e.key === "Enter") {
      toggleEdit(columnIndex, taskIndex, false);
    }
  };

  const removeTask = (columnIndex: number, taskIndex: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[columnIndex].tasks = updatedTasks[columnIndex].tasks.filter((_, i) => i !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <header className={styles.header}>
        <div className={styles.userProfile}>
          <span className={styles.userName}>23조 파이팅</span>
        </div>
      </header>

      <main className={styles.mainContent}>
        {tasks.map((column, columnIndex) => (
          <section key={columnIndex} className={styles.board}>
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <h2>{column.column}</h2>
                <button
                  className={styles.addBtn}
                  aria-label="Add Task"
                  onClick={() => addTask(columnIndex)}
                >
                  +
                </button>
              </div>
              {column.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className={styles.taskCard}>
                  <div className={styles.taskHead}>
                    {task.isEditing ? (
                      <input
                        type="text"
                        className={styles.taskInput}
                        value={task.title}
                        onChange={(e) =>
                          updateTaskTitle(columnIndex, taskIndex, e.target.value)
                        }
                        onBlur={() => toggleEdit(columnIndex, taskIndex, false)}
                        onKeyDown={(e) => handleKeyDown(e, columnIndex, taskIndex)}
                        autoFocus
                      />
                    ) : (
                      <h3 onClick={() => toggleEdit(columnIndex, taskIndex, true)}>
                        {task.title || "Click to edit"}
                      </h3>
                    )}
                    <img
                      src="/images/project/remove.png"
                      alt="Remove Task"
                      className={styles.trashcan}
                      onClick={() => removeTask(columnIndex, taskIndex)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <p>{task.description}</p>
                  <div className={styles.avatars}>
                    {task.assignees.map((assignee, avatarIndex) => (
                      <span key={avatarIndex} className={styles.avatar}>
                        {assignee}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
