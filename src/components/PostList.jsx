import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

const PostList = ({title, posts, openPost, deletePost}) => {
    const visiblePost = posts.map((post, index) => {
		return (
            <CSSTransition
                key={post.id} 
                timeout={350}
                classNames="postItem"
            >
                <PostItem
                    post={post} 
                    openPost={openPost}
                    deletePost={deletePost}
                />
            </CSSTransition>
        )
	});

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
                {
                    visiblePost.length
                    ? 
                    <TransitionGroup>
                        {visiblePost}
                    </TransitionGroup>
                    : 
                    <div style={{textAlign: "center", fontSize: 20, fontWeight: 700}}>
                        Посты не найдены!
                    </div>
                }
        </div>
    );
}

export default PostList;