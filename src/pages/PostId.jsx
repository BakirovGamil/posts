import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import useFetching from "../hooks/useFetching";

function PostId() {
    const [post, setPost] = useState({});
    const {id} = useParams();
    const [postFetch, isPostLoading, errorPost] = useFetching(async() => {
        const responsePost = await PostService.getById(id);
        setPost(await responsePost.json());
    });

    useEffect(() => {
       postFetch();
    }, []);

    return (
        <div>
            {isPostLoading
                ? <MyLoader/>
                : 
                <div className="post__content">
                    <strong>{post.id}. {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
            }
        </div>
    );
}

export default PostId;