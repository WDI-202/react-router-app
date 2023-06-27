import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
	const navigate = useNavigate();
	return (
		<div>
			<h2>{blog.title}</h2>
			<p>{blog.author}</p>
			<p>{blog.content}</p>
			<button
				onClick={() => {
					navigate(`/blog/${blog.id}/edit`);
				}}
			>
				Edit
			</button>
		</div>
	);
};

export default BlogCard;
