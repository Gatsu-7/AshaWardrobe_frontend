import React from "react";
import "./ClothingReuseIdeas.css";

const ClothingReuseIdeas = () => {
  const reuseIdeas = [
    {
      title: "Turn Old T-Shirts into Tote Bags",
      description:
        "Cut and sew old t-shirts into reusable tote bags. This is a great way to reduce plastic usage and repurpose worn-out clothes!",
      image: "https://example.com/tote-bag.jpg",
    },
    {
      title: "Create a Quilt from Old Clothes",
      description:
        "Gather your old clothes and stitch them together into a cozy quilt. It’s a fantastic way to preserve memories and keep warm.",
      image: "https://example.com/quilt.jpg",
    },
    {
      title: "Make Cleaning Rags",
      description:
        "Cut up old, worn-out clothes to use as cleaning rags. They are perfect for dusting and wiping surfaces.",
      image: "https://example.com/cleaning-rags.jpg",
    },
    {
      title: "Transform Denim into Fashion Accessories",
      description:
        "Repurpose old jeans into stylish accessories like handbags, hats, or even jewelry. Denim is a durable fabric with endless possibilities.",
      image: "https://example.com/denim-accessories.jpg",
    },
    {
      title: "Craft Pet Toys from Scraps",
      description:
        "Use old clothes to create safe, fun toys for your pets. Braid fabric strips or sew plush toys for your furry friends.",
      image: "https://example.com/pet-toys.jpg",
    },
    {
      title: "Upcycle Clothes into Home Décor",
      description:
        "Turn your old garments into decorative pillows, wall hangings, or even table runners to add a personal touch to your home.",
      image: "https://example.com/home-decor.jpg",
    },
    {
      title: "Upcycled Home Decor",
      description:
        "Old t-shirts or fabric scraps can be transformed into beautiful throw pillows or wall hangings. Using fabric glue or stitching, you can craft unique, eco-friendly home decor pieces that bring a personalized touch to any space.",
    },
    {
      title: "Cloth Tote Bags",
      description:
        "Convert old jeans or sturdy fabric materials into reusable tote bags. With minimal sewing, you can create bags for grocery shopping or daily use, reducing the need for plastic bags while giving new life to worn-out clothes.",
    },
    {
      title: "Pet Beds and Toys",
      description:
        "Cut old clothes into strips to make cozy, stuffed pet beds or durable chew toys for your furry friends. It's a fun way to recycle and give your pets a little comfort from your unused clothes.",
    },
    {
      title: "Patchwork Quilts",
      description:
        "Gather pieces of old fabric or clothes to create a patchwork quilt. This timeless craft is not only a great way to reuse materials, but it also results in a warm, sentimental item you can cherish for years.",
    },
    {
      title: "Fabric Planters",
      description:
        "Old denim or sturdy fabric can be repurposed into small hanging planters for indoor or outdoor plants. These fabric planters are durable and bring a unique, eco-friendly flair to your gardening setup.",
    },
    {
      title: "Headbands and Accessories",
      description:
        "Old scarves, shirts, or leggings can be cut and tied into fashionable headbands, hair ties, or even wristbands. By using discarded fabric, you can create accessories that are both trendy and sustainable.",
    },
    {
      title: "DIY Cleaning Rags",
      description:
        "Turn old clothes, especially soft cotton t-shirts, into reusable cleaning rags. These are great for wiping surfaces, cleaning windows, or even polishing furniture, reducing the need for disposable products.",
    },
    {
      title: "Fabric Gift Wrap",
      description:
        "Instead of using single-use gift wrapping paper, old scarves or fabric pieces can be used to wrap presents. This not only looks beautiful but also promotes eco-friendly gifting by reducing waste.",
    },
  ];

  return (
    <div className="reuse-ideas-container">
      <h1>Creative Clothing Reuse Ideas</h1>
      <p>
        Explore ways to upcycle your old clothes and give them a second life!
      </p>
      <div className="reuse-ideas-grid">
        {reuseIdeas.map((idea, index) => (
          <div key={index} className="idea-item">
            {/* <img src={idea.image} alt={idea.title} className="idea-image" /> */}
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingReuseIdeas;
