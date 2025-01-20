import Link from 'next/link';
import { Project } from '@/types/project';

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        </li>
      ))}
    </ul>
  );
}
