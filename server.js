const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware statics
app.use(express.static("public"));

// Data
const items = [
  {
    id: 1,
    title: "Tesla, Inc.",
    description:
      "Leading the electric vehicle revolution, Tesla is known for its innovative technology and commitment to sustainability.",
    image: "img/adrian-regeci-HJfKkeQfqMQ-unsplash.jpg",
},
{
    id: 2,
    title: "Google LLC",
    description:
    "A technology giant specializing in Internet-related services and products, Google is a leader in search engines and cloud computing.",
    image: "img/wtrsnvc-_-Rv3JW9JAaAw-unsplash.jpg",
    },
    {
        id: 3,
        title: "Amazon.com, Inc.",
        description:
        "Starting as an online bookstore, Amazon has transformed into the largest e-commerce platform in the world, also leading in cloud services.",
        image: "img/harley-davidson-HG3Zy9sCCUg-unsplash.jpg",
    },
    {
        id: 4,
        title: "Apple Inc.",
        description:
        "Renowned for its innovative products like the iPhone and Mac, Apple is a leader in consumer electronics and digital services.",
        image: "img/jakub-zerdzicki-Ry86fG1a7HY-unsplash.jpg",
    },
    {
        id: 5,
        title: "Microsoft Corporation",
        description:
        "A pioneer in software development, Microsoft is best known for its Windows operating system and Office productivity suite.",
        image: "img/markus-spiske-mnsMQjcAcbk-unsplash.jpg",
    },
    {
        id: 6,
        title: "Facebook, Inc.",
        description:
        "As one of the largest social media platforms, Facebook connects billions of people and enables social networking and advertising.",
        image: "img/maxim-hopman-8vn4KvfU640-unsplash.jpg",
    },
    {
        id: 7,
        title: "Samsung Electronics",
        description:
        "A global leader in consumer electronics and technology, Samsung is known for its smartphones, TVs, and home appliances.",
        image: "img/nayris-aquino-ziM8vy__-o0-unsplash.jpg",
    },
    {
        id: 8,
        title: "IBM Corporation",
        description:
        "A multinational technology company, IBM focuses on cloud computing, AI, and enterprise solutions.",
        image: "img/mikita-yo-EhXB_OxWWus-unsplash.jpg",
    },
    {
        id: 9,
        title: "Nike, Inc.",
        description:
        "A leading athletic apparel and footwear brand, Nike is known for its innovative products and powerful marketing.",
        image: "img/tom-cleary-gxTYfm9CE24-unsplash.jpg",
    },
    {
        id: 10,
        title: "Netflix, Inc.",
        description:
        "A pioneer in streaming media, Netflix has transformed the entertainment industry with its subscription-based model and original content.",
        image: "img/freestocks-11SgH7U6TmI-unsplash.jpg",
  },
];





// Route principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to get elements
app.get("/items", (req, res) => {
  res.json(items);
});

// Route 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});


// Run Server
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
