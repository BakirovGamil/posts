import "./styles/App.css"
import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "JS 1", body: "Description"},
		{id: 2, title: "JS 2", body: "Description"},
		{id: 3, title: "JS 3", body: "Description"},
		{id: 4, title: "JS 4", body: "Description"},
		{id: 5, title: "JS 5", body: "Description"}
	]);

	const [filter, setFilter] = useState({sort: "", query: ""});
	const [modal, setModal] = useState(false);
	
	const sortedPosts = useMemo(() => {
		console.log("Отработала функция сортировки");
		if(filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}

		return posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		console.log("Отработала функция поиска");
		
		if(filter.query) {
			const regExp = new RegExp(filter.query, "i");

			return sortedPosts.filter(post => regExp.test(post.title));
		}
		
		return sortedPosts;
	}, [filter.query, sortedPosts]);

	function createPost(e, post) {
		e.preventDefault();

		setPosts([...posts, {...post, id: Date.now()}]);
		setModal(false);
	}

	function deletePost(id) {
		setPosts(posts.filter(post => post.id !== id));
	}
	
	return (
		<div className="App">
			<MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm addNewPost={createPost}/>
			</MyModal>
			<hr style={{margin: "20px 0"}} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostList 
				title="Посты про JS" 
				posts={sortedAndSearchedPosts} 
				deletePost={deletePost}
			/>
		</div>
	);
}

export default App;
