import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const EditBlog = () => {
	const [editTitle, setEditTitle] = useState("");
	const [editContent, setEditContent] = useState("");

	const { id } = useParams();
	const navigate = useNavigate();
	const { blogs, setBlogs } = useOutletContext();

	useEffect(() => {
		// update find the selected blog and update the edit states
		console.log(typeof blogs[0].id);
		console.log(typeof id);
		const foundBlog = blogs.find((blog) => blog.id.toString() === id);
		setEditTitle(foundBlog.title);
		setEditContent(foundBlog.content);
	}, [id, blogs]);

	//create a function that handles the submit button below. Should update the current blog, which will update all the blogs.
	// Once updated, should redirect to home where you would see the updated blog
	const handleSubmit = () => {
		setBlogs((prevState) => {
			const updatedBlogs = prevState.map((blog) => {
				if (blog.id.toString() === id) {
					blog.title = editTitle;
					blog.content = editContent;
				}
				console.log(blog);
				return blog;
			});
			return updatedBlogs;
		});
		navigate("/");
	};

	//Hint: use the useOutletContext
	const deleteBlog = () => {
		setBlogs((prevState) => {
			const remainingBlogs = prevState.filter(
				(blog) => blog.id.toString() !== id
			);
			return remainingBlogs;
		});
		navigate("/");
	};

	return (
		<div>
			<h1>Edit Blog:</h1>
			{/** make input fields for title and content, and a button to submit changes */}
			<label>Title: </label>
			<input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
			<br />
			<label>Content: </label>
			<input
				value={editContent}
				onChange={(e) => setEditContent(e.target.value)}
			/>
			<br />
			<button onClick={handleSubmit}>Submit</button>
			<button onClick={deleteBlog}>Delete</button>
		</div>
	);
};

export default EditBlog;
