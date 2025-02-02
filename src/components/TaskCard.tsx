import styles from "@/styles/project.module.css";

interface TaskCardProps {
  title: string;
  description: string;
  avatars: string[];
}

export default function TaskCard({ title, description, avatars }: TaskCardProps) {
  return (
    <div className={styles.taskCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.avatars}>
        {avatars.map((avatar, index) => (
          <span key={index} className={styles.avatar}>
            {avatar}
          </span>
        ))}
      </div>
    </div>
  );
}
