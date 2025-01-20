import Link from 'next/link';
import { Post } from '@/types/post';

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/projects/${post.projectId}/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
