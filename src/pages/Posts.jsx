import "../styles/App.css"
import { useState, useEffect } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePost} from "../hooks/usePost"
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import useFetching from "../hooks/useFetching";
import { getPageCount } from "../libs/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useNavigate } from "react-router-dom";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: "", query: ""});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query);
	const navigate = useNavigate();

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(await response.json());
		const totalCount = response.headers.get("x-total-count");
		setTotalPages(getPageCount(totalCount, limit));
	});
	
	useEffect(() => {
		fetchPosts()
	}, [page]);

	function changePage(page) {
		setPage(page);
	}
	
	function createPost(e, post) {
		e.preventDefault();

		setPosts([...posts, {...post, id: Date.now()}]);
		setModal(false);
	}

	function deletePost(id) {
		setPosts(posts.filter(post => post.id !== id));
	}

	function openPost(id) {
		navigate(`/posts/${id}`);
	}
	
	return (
		<div className="App">
			<MyButton onClick={fetchPosts}>Загрузить посты</MyButton>
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
			{postError && <h1>{postError}</h1>}
			{isPostsLoading 
				? <MyLoader/>
				: 
					<>
						<PostList 
							title="Посты" 
							posts={sortedAndSearchedPosts} 
							openPost={openPost}
							deletePost={deletePost}
						/>
						<Pagination totalPages={totalPages} page={page} changePage={changePage}/>
					</>
			}
		</div>
	);
}

export default Posts;
