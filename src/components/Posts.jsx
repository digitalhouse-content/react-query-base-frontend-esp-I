import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPosts } from "../service";

export const Posts = ({handlePostId}) => {
	const [posts, setPosts] = useState(null);
	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		getPosts()
			.then((data) => {
				setLoading(true);
				setPosts(data);
			})
			.catch(() => {
				setError(true);
				setPosts(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something went wrong</p>}
			<ul>
				{posts &&
					posts.map((post) => (
						<li onClick={() => handlePostId(post.id)} key={post.id}>
							{post.title}
						</li>
					))}
			</ul>
		</div>
	);
};

Posts.propTypes = {
	handlePostId: PropTypes.func.isRequired,
};
