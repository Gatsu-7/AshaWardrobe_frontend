import React from "react";
import "./BlogSection.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import blog from "../assets/blog.png";
const blogs = [
  {
    id: 1,
    title: "The Importance of Clothing Donations",
    author: "John Doe",
    date: "September 15, 2024",
    excerpt:
      "Donating clothes is more than just decluttering your wardrobe. It can make a significant impact on people's lives...",
    link: "/blog/importance-clothing-donations",
  },
  {
    id: 2,
    title: "How Your Old Clothes Can Save Lives",
    author: "Jane Smith",
    date: "August 28, 2024",
    excerpt:
      "Every piece of clothing you donate has the potential to bring comfort and warmth to those in need...",
    link: "/blog/old-clothes-save-lives",
  },
  {
    id: 3,
    title: "Sustainable Fashion and Donation",
    author: "Anna Johnson",
    date: "July 22, 2024",
    excerpt:
      "The fashion industry is the second-largest polluter in the world. Donating your clothes is one step towards sustainability...",
    link: "/blog/sustainable-fashion-donation",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section-">
      <h2>Blogs</h2>
      <img
        src={blog}
        alt=""
        className="scale-img"
        style={{
          position: "absolute",
          bottom: "-634%",
          right: "5px",
          height: "170px",
          width: "170px",
        }}
      />
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card-">
            <h3>{blog.title}</h3>
            <p className="blog-meta">
              By {blog.author} on {blog.date}
            </p>
            <p>{blog.excerpt}</p>
            <Link to={blog.link} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link to="/blog" className="view-more">
          View More
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
