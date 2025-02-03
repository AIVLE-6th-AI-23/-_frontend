"use client";

import styles from "@/styles/project.module.css";
import { useDarkMode } from "@/hooks/useDarkMode";
import type { JSX } from "react";

export default function Project(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // 클라이언트 컴포넌트에서 호출

  const tasks = [
    {
      column: "To do",
      tasks: [
        {
          title: "Project A",
          description:
            "Plan and create the user flow for onboarding. Include wireframes and presentation slides.",
          assignees: ["AB", "CD"],
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
        },
      ],
    },
  ];

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <header className={styles.header}>
        <div className={styles.userProfile}>
          <span className={styles.userName}>남궁근</span>
          <img
            src="/images/profile/profile.png"
            alt="Profile"
            className={styles.profilePic}
          />
        </div>
        <button
          onClick={toggleDarkMode}
          className={styles.darkModeToggle}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </header>

      <main className={styles.mainContent}>
        {tasks.map((column, columnIndex) => (
          <section key={columnIndex} className={styles.board}>
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <h2>{column.column}</h2>
                <button className={styles.addBtn} aria-label="Add Task">
                  +
                </button>
              </div>
              {column.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className={styles.taskCard}>
                  <h3>{task.title}</h3>
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
