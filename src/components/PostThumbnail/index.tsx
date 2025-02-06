import React from "react";
import { updatePostThumbnail } from "@/services/post";
import { Post } from "@/types/types";


interface PostThumbnailProps {
    post: Post;
    update : boolean;
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ post, update }) => {
    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        await updatePostThumbnail({ boardId : post.boardId, postId: post.postId, file });

        window.location.reload();
    };

    const renderFilePreview = () => {
        if (!post.thumbnail) {
            return null; // TODO :: thumbnail 없을 시 처리 추가
        }

        const fileType = post.thumbnail.split(".").pop()?.toLowerCase() || "";

        if (["jpg", "jpeg", "png", "gif", "webp"].includes(fileType)) {
            return <img src={post.thumbnail} alt="업로드된 이미지" style={{ width: "100px", height: "100px" }} />;
        } else if (["mp4", "webm", "ogg"].includes(fileType)) {
            return (
                <video width="100px" height="100px" controls>
                    <source src={post.thumbnail} type={`video/${fileType}`} />
                    동영상을 재생할 수 없습니다.
                </video>
            );
        } else {
            return (
                <p>
                    파일 업로드됨: <a href={post.thumbnail} target="_blank" rel="noopener noreferrer">파일 보기</a>
                </p>
            );
        }
    };

    return (
        <div>
            {renderFilePreview()}
            {update && <input type="file" onChange={handleFileUpload} />}
        </div>
    );
};

export default PostThumbnail;
