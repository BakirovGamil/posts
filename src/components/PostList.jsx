import PostItem from "./PostItem";

const PostList = ({title, posts, deletePost}) => {
    const visiblePost = posts.map((post, index) => {
		return <PostItem 
            number={index + 1} 
            key={post.id} 
            post={post} 
            deletePost={deletePost}
        />
	});

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
			{
                visiblePost.length
                ? 
                visiblePost
                : 
                <div style={{textAlign: "center", fontSize: 20, fontWeight: 700}}>
                    Посты не найдены!
                </div>
            }
        </div>
    );
}

export default PostList;