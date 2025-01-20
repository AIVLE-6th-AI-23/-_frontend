import { fetchPost } from '@/utils/fetcher';
import { Post } from '@/types/post';

export default async function PostDetailPage({ params }: { params: { postId: string } }) {
  const post: Post = await fetchPost(params.postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
