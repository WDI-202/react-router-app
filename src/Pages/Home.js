import React from "react";
import { useOutletContext } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const Home = () => {
	//use useOutletContext to bring in the blogs.
	//create a blogCard component.
	//map through the blogs 'props' and render each blogCard.
	//each blogCard should show title, content and author
	const { blogs } = useOutletContext();

	return (
		<div>
			<h1>Home</h1>
			{blogs.map((blog) => {
				return <BlogCard key={blog.id} blog={blog} />;
			})}
		</div>
	);
};

export default Home;
