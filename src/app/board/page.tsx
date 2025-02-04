"use client";

import styles from "@/styles/board.module.css";
import { useDarkMode } from "@/hooks/useDarkMode";
import type { JSX } from "react";
import { useState, useEffect } from "react";

export default function Project(): JSX.Element {
  const { isDarkMode } = useDarkMode(); // 클라이언트 컴포넌트에서 호출

  const [tasks, setTasks] = useState([
    {
      column: "Board",
      tasks: [
        {
          title: "메이플 스토리",
          description:
            "Plan and create the user flow for onboarding. Include wireframes and presentation slides.",
          assignees: ["AB", "CD"],
        },
        {
          title: "마인크래프트트",
          description:
            "Plan and create the user flow for onboarding. Include wireframes and presentation slides.",
          assignees: ["AB", "CD"],
        },
      ],
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignees: [], // 부서 추가
  });

  const [editingTask, setEditingTask] = useState<any>(null); // 수정할 작업 정보

  // 부서 목록
  const departments = ["IT", "HR", "MK", "GA"];

  const [isDialogOpen, setIsDialogOpen] = useState(false); // 다이얼로그 열기/닫기 상태

  //다이얼로그 열기
  const openDialog = (task? :any) => {
    if (task) {
      setEditingTask(task); // 수정할 작업 설정
      setNewTask({
        title: task.title,
        description: task.description,
        assignees: task.assignees,
      });
    } else {
      setEditingTask(null); // 새 작업 추가
      setNewTask({
        title: "",
        description: "",
        assignees: [],
      });
    }
    setIsDialogOpen(true);
  };


  // 다이얼로그 닫기
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSave = () => {
    console.log("Saving task...");
    console.log("newTask:", newTask);
    console.log("editingTask:", editingTask?.title || "없음");
  
    let isEditing = false;
  
    const updatedTasks = tasks.map((column) => {
      const updatedColumn = { ...column };
  
      updatedColumn.tasks = updatedColumn.tasks.map((task) => {
        if (editingTask && task.title === editingTask.title) {
          isEditing = true;
          return { ...newTask }; // 기존 작업 수정
        }
        return task;
      });
  
      if (!isEditing) {
        // 기존에 수정된 게 없으면 새 작업 추가
        updatedColumn.tasks.push({
          title: newTask.title,
          description: newTask.description,
          assignees: newTask.assignees,
        });
      }
  
      return updatedColumn;
    });
  
    setTasks(updatedTasks);
    console.log("Updated tasks:", updatedTasks);
    closeDialog();
  };
  
  
  // 제목, 설명
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 입력 값 변경 처리
  const handleSelectChange  = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, multiple, selectedOptions } = e.target;
  
    if (multiple) {
      // 다중 선택 가능한 select 요소 처리
      const selectedValues = Array.from(selectedOptions, (option) => option.value);
      setNewTask((prevState) => ({
        ...prevState,
        [name]: selectedValues,
      }));
    } else {
      // 일반 input, textarea 처리
      setNewTask((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // 삭제 버튼 처리
  const handleDelete = (task: any) => {
    const updatedTasks = [...tasks];
    updatedTasks[0].tasks = updatedTasks[0].tasks.filter(
      (t) => t.title !== task.title
    );
    setTasks(updatedTasks);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <main className={styles.mainContent}>
        {tasks.map((column, columnIndex) => (
          <section key={columnIndex} className={styles.board}>
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <h2>{column.column}</h2>
                <div className={styles.taskActions}> {/* 버튼을 감싸는 div */}
                  <button
                    className={styles.addBtn}
                    aria-label="Add Task"
                    onClick={openDialog}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.taskCardContainer}>
                {column.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className={styles.taskCard}>
                    <div className={styles.taskHeader}>
                      <h3>{task.title}</h3>
                      <div className={styles.taskActions}>
                        <button
                          className={styles.taskBtn}
                          aria-label="update"
                          onClick={() => openDialog(task)} // 수정 버튼
                        >
                          <img src="/images/update.png" alt="update" className={styles.iconImage} />
                        </button>
                        <button
                          className={styles.taskBtn}
                          aria-label="remove"
                          onClick={() => handleDelete(task)} // 삭제 버튼
                        >
                          <img src="/images/remove.png" alt="remove" className={styles.iconImage} />
                        </button>
                      </div>
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
            </div>
          </section>
        ))}
      </main>

      {/* 다이얼로그 오버레이 및 다이얼로그 창 */}
      {isDialogOpen && (
        <div className={styles.overlay}>
          <div className={styles.dialog}>
            <h3>{editingTask ? "작업 수정" : "새 작업 추가"}</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave(); // 저장 버튼 클릭 시 handleSave 실행
              }}
            >
              <input
                type="text"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                placeholder="제목을 입력하세요"
              />

              <textarea
                name="description"
                value={newTask.description}
                onChange={handleInputChange}
                placeholder="description..."
              />
                <select
                  name="assignees"
                  multiple
                  value={newTask.assignees}
                  onChange={handleSelectChange}
                  required={!editingTask} //필수 선택 사항
                  
                >
                  <option value="">부서를 선택하세요</option>
                  {departments.map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              <p>
              {newTask.assignees && newTask.assignees.length > 0 ? newTask.assignees.join(", "): ""}
             </p>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.saveBtn}>저장</button>
                <button
                  type="button"
                  onClick={closeDialog}
                  className={styles.closeBtn}
                >
                  닫기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
