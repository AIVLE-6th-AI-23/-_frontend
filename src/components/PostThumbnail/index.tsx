import React, { useState, useCallback } from "react";
import { updatePostThumbnail } from "@/services/post";
import { Post } from "@/types/types";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import * as styles from "./postThumbnail.css";

interface PostThumbnailProps {
    post: Post;
    update: boolean;
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ post, update }) => {
    const [filePreview, setFilePreview] = useState<string | null>(post.thumbnail || null);

    const handleFileUpload = async (file: File) => {
        if (!file) return;
        setFilePreview(URL.createObjectURL(file));
        await updatePostThumbnail({ boardId: post.boardId, postId: post.postId, file });
        window.location.reload();
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            handleFileUpload(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
            "video/*": []
        },
        multiple: false,
        disabled: !update,
    });

    return (
        <div>
            <div
                {...getRootProps()}
                className={styles.dragArea}
                style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    marginTop: "10px",
                }}
            >
                {filePreview ? (
                filePreview.endsWith(".mp4") || filePreview.endsWith(".webm") || filePreview.endsWith(".ogg") ? (
                    <video width="100px" height="100px" controls>
                        <source src={filePreview} type="video/mp4" />
                        동영상을 재생할 수 없습니다.
                    </video>
                ) : (
                    <Image src={filePreview} alt="업로드된 이미지" width={200} height={200} />
                )
                ) : (
                    <Image src="/images/No-Image-Placeholder.png" alt="No Image" width={100} height={100} />
                )}
                <input {...getInputProps()} />
            </div>
        </div>
    );
};

export default PostThumbnail;
