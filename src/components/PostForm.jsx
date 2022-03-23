import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import {useState} from "react";

function PostForm({addNewPost}) {
    const [post, setPost] = useState({title: "", body: ""});

	function handleChangeTitle(e) {
		setPost({...post, title: e.target.value});
	}

	function handleChangeBody(e) {
		setPost({...post, body: e.target.value});
	}

    const addNewPostOnClick = (e) => {
        addNewPost(e, post);
        setPost({title: "", body: ""});
    }

    return (
        <form>
            <MyInput 
                type="text" 
                value={post.title} 
                onChange={handleChangeTitle} 
                placeholder="Название поста"
            />
            <MyInput
                type="text" 
                value={post.body}
                onChange={handleChangeBody}
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPostOnClick}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;