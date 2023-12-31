import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {getPostId} from "../service";

export const Post = ({id}) => {
	const [post, setPost] = useState({
		title: "",
		body: "",
	});
	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		getPostId(id)
			.then((data) => {
				setLoading(true);
				setPost(data);
			})
			.catch(() => {
				setError(true);
				setPost(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something went wrong</p>}
			<h4>{post?.title}</h4>
			<p>{post?.body}</p>
		</div>
	);
};

Post.propTypes = {
	id: PropTypes.number.isRequired,
};
