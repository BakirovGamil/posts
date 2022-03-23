import { useState } from "react";
import MyButton from "./UI/button/MyButton";

function PostItem({post, deletePost, openPost}) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={openPost.bind(null, post.id)}>Открыть</MyButton>
                <MyButton onClick={deletePost.bind(null, post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;