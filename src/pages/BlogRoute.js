import React from "react";
import { Link } from "react-router-dom";
import "./BlogRoute.css";

const BlogRoute = () => {
  const blogs = [
    {
      title: "The Importance of Clothing Donations",
      description:
        "Discover why donating your old clothes can make a huge difference to communities in need.",
      link: "/blog/importance-clothing-donations",
      imgSrc: "https://images.unsplash.com/photo-1514996937319-344454492b37", // Replace with a relevant image link
    },
    {
      title: "How Your Old Clothes Can Save Lives",
      description:
        "Your old clothes can go a long way in helping those in need. Learn how they can save lives.",
      link: "/blog/old-clothes-save-lives",
      imgSrc: "https://www.merchyou.com/media/Blog/Vyrazene_obleceni/Reuse.png", // Replace with a relevant image link
    },
    {
      title: "Sustainable Fashion and Donation",
      description:
        "Understand how sustainable fashion and clothing donations contribute to a better environment.",
      link: "/blog/sustainable-fashion-donation",
      imgSrc:
        "https://static.vecteezy.com/system/resources/previews/026/150/142/non_2x/eco-recycled-textile-clothing-sustainable-donating-used-apparel-to-donation-box-recycle-and-environmental-care-concept-on-fashion-design-illustration-vector.jpg", // Replace with a relevant image link
    },
    {
      title: "Making a Difference: Stories from Donors",
      description:
        "Read inspiring stories from people who have donated their clothes and the impact they've made.",
      link: "/blog/donor-stories",
      imgSrc: "https://mombian.com/images/my_donor_story_videos.jpg",
    },
    {
      title: "The Journey of Your Donated Clothes",
      description:
        "Ever wondered where your clothes go after donation? Learn about the process and who benefits.",
      link: "/blog/journey-of-donated-clothes",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzidS-YLd50C8SdUbPrUmSarJlB_Z0YhBA1Q&s",
    },
    {
      title: "Tips for Donating Clothes Responsibly",
      description:
        "Learn the best practices for donating clothes, ensuring they are clean, in good condition, and sorted.",
      link: "/blog/tips-for-donating",
      imgSrc:
        "https://i.ytimg.com/vi/jRDkrhyZO9E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaTXlXJVkL5uxx_qDCZsScWlbA4w",
    },
    {
      title: "The Environmental Impact of Fast Fashion",
      description:
        "Explore the negative effects of fast fashion and how clothing donations can mitigate environmental damage.",
      link: "/blog/environmental-impact-fast-fashion",
      imgSrc:
        "https://static.independent.co.uk/2022/02/18/10/iStock-1220935757.jpg",
    },
    {
      title: "How Clothing Donations Benefit Local Communities",
      description:
        "Discover how your clothing donations directly help people in your local community.",
      link: "/blog/benefits-for-local-communities",
      imgSrc:
        "https://cnu.edu/_assets/img/news/2021/09-22-cce_clothing_drive/story.jpg",
    },
    {
      title: "Clothing Donation Drives: What You Need to Know",
      description:
        "Get tips on organizing or participating in a clothing donation drive to help those in need.",
      link: "/blog/clothing-donation-drives",
      imgSrc: "https://www.goodnet.org/photos/620x0/28200_hd.jpg",
    },
    {
      title: "Seasonal Clothing Donations: Why Timing Matters",
      description:
        "Find out why donating the right clothes at the right time can have an even bigger impact.",
      link: "/blog/seasonal-clothing-donations",
      imgSrc:
        "https://www.shutterstock.com/image-vector/winter-clothes-donationvector-illustration-flat-260nw-2409179439.jpg",
    },
    // Add more blog entries here
  ];

  return (
    <div className="blog-section">
      <h1 className="blog-title">Our Blog</h1>
      <p className="blog-description">
        Stay updated with our latest articles on clothing donations,
        sustainability, and how your contribution makes a difference.
      </p>

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.imgSrc} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{blog.title}</h2>
              <p className="blog-excerpt">{blog.description}</p>
              <Link to={blog.link} className="read-more-">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRoute;
