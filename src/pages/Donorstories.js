import React from "react";
import "./DonorStories.css";
import BackButton from "../components/BackButton";

const DonorStories = () => {
  const stories = [
    {
      name: "Aditi Sharma",
      title: "From Closet to Comfort",
      content: `Aditi had a wardrobe full of clothes she no longer wore. Instead of letting them gather dust, she donated them to our organization. "I never realized how much impact my unused clothes could have," she says. Her donations provided warmth to underprivileged families during the winter. "The smile on their faces is something I'll never forget," Aditi adds.`,
      imgSrc:
        "https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-white-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25720.jpg?w=1060&t=st=1726591087~exp=1726591687~hmac=97e05e7bc72dfbf33d5e0469b69e0bb456d1126555a2d318b2ff42babb612174",
    },
    {
      name: "Rahul Mehta",
      title: "Transforming Lives, One Jacket at a Time",
      content: `Rahul had been holding onto a collection of jackets for years, thinking he'd eventually use them. When he heard about the need for warm clothing in northern regions, he decided to donate. "Knowing my jackets helped people endure the cold winters feels amazing," he shares. His contribution was distributed to remote villages, making a tangible difference in people's lives.`,
      imgSrc:
        "https://img.freepik.com/free-photo/portrait-young-indian-businessman-student-sitting-with-pen_1262-17490.jpg?w=1060&t=st=1726590888~exp=1726591488~hmac=d0cf5926b814959925b4369f921a60a6c8f3bdd69f749c8b267098ca7d649766",
    },
    {
      name: "Nisha Patel",
      title: "A Small Act of Kindness",
      content: `Nisha believes in the power of small acts of kindness. She regularly donates her gently used clothes. "It's a simple gesture, but when many people do it, the impact is huge," Nisha says. Her clothes have helped children in rural areas attend school with confidence. "It's not just about giving, it's about empowering others," she reflects.`,
      imgSrc:
        "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?w=1060&t=st=1726591123~exp=1726591723~hmac=a95cc887cb2de9a664356119b97f4c03efd257e3a04a479483f01a6279a1ecf7",
    },
    {
      name: "Aarav Kapoor",
      title: "Passing Down My Son’s Clothes",
      content: `After Aarav’s son outgrew his clothes, he decided to donate them instead of throwing them away. "It’s heartwarming to know that these clothes will go to families who truly need them. My son’s baby clothes are now providing warmth to others," Aarav says.`,
      imgSrc:
        "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?w=1060&t=st=1726590984~exp=1726591584~hmac=9ba16ea8f96f011cf9b9eb1fba271d0b13a7635da4f3618372db99aea7caaaad",
    },
    {
      name: "Pooja Singh",
      title: "Giving Is Caring",
      content: `Pooja always felt she should contribute to her community in some way. She decided to clean out her wardrobe and donate her gently used clothes. "It's such a simple act, but the joy it brings to others is beyond measure. It's not just about clothes; it's about making someone feel valued," she says.`,
      imgSrc:
        "https://img.freepik.com/free-photo/portrait-young-beautiful-indian-woman-with-sari_123827-29665.jpg?w=1060&t=st=1726591020~exp=1726591620~hmac=02acdbbee8dabeb70c058a2136dd0bde0c0f04298073e0b1c83e7787afa101a1",
    },
    {
      name: "Vikram Desai",
      title: "Helping the Homeless",
      content: `Vikram regularly donates warm clothes to help homeless shelters. "The winters can be brutal, and everyone deserves to stay warm. I'm glad my donations are making that possible for someone," he shares. His donations have supported several local shelters.`,
      imgSrc:
        "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg?w=1060&t=st=1726590928~exp=1726591528~hmac=0d6cdb640d8d81a07e87cfc6e250d429b242f2c28e4eda6ffbd82bc651dd8d2a",
    },
    {
      name: "Sonal Verma",
      title: "Turning Memories into Hope",
      content: `Sonal had several outfits from her late mother that she cherished. "I felt it was time to give them a new life, and donating them felt right," she says. These clothes have now been passed on to women in need, helping them start afresh with dignity and hope.`,
      imgSrc:
        "https://img.freepik.com/free-photo/close-up-excited-person-portrait_23-2151186646.jpg?t=st=1726590949~exp=1726594549~hmac=20ac392d5bcd0800738967b700877961574dbae5b9c32d55f3ee7d152ddb9664&w=1380",
    },
  ];

  return (
    <div className="blog-post">
      <div className="blog-post-title blog-hero">
        <BackButton />

        <img
          src="https://mombian.com/images/my_donor_story_videos.jpg"
          alt=""
          className="blog-hero-image"
        />
        <div className="hero-overlay">
          <h1>Making a Difference: Stories from Donors</h1>
          <p>
            Every donation counts. Here are stories from people who have made a
            real impact through their clothing donations.
          </p>
        </div>
      </div>

      <div className="stories-container">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.imgSrc} alt={story.name} className="story-img" />
            <h2>{story.title}</h2>
            <h3>by {story.name}</h3>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorStories;
