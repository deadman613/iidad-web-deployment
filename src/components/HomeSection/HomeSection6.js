"use client";

import Faqs from "@/components/Faqs/Faqs";

const items = [
  {
    q: "Which is the best web development course at IIDAD for beginners?",
    a: "The best web development course at IIDAD for beginners is the Full Web Development Course, because it starts from absolute basics and moves step by step. Students first learn HTML and CSS, then JavaScript, and finally work on real websites and projects. This course is ideal for students after 12th, college students, and working professionals with no coding background.",
  },
  {
    q: "Why is IIDAD one of the best web development institutes in Delhi?",
    a: "IIDAD is considered one of the best web development institutes in Delhi because it focuses on practical learning, live projects, and simple teaching methods. Instead of only theory, students learn by building real websites. IIDAD also provides career guidance and placement assistance, which helps students start their careers confidently.",
  },
  {
    q: "What does a web developer actually do?",
    a: "A web developer designs, builds, and maintains websites and web applications. This includes writing code, creating page layouts, fixing bugs, improving website speed, and making websites mobile-friendly. Web developers also ensure that websites work properly on different browsers and devices.",
  },
  {
    q: "What is the salary of a beginner web developer in India?",
    a: "A beginner web developer in India usually earns between ₹3 LPA to ₹6 LPA, depending on skills, projects, and company size. Developers with strong practical knowledge and good portfolios often get better salary packages even as freshers.",
  },
  {
    q: "How quickly can I learn web development at IIDAD?",
    a: "At IIDAD, most students understand the basics of web development within 2–3 months. With regular practice, assignments, and projects, students can become job-ready in 5–6 months. Learning speed depends on practice consistency and interest.",
  },
  {
    q: "Is web development a good career in 2026?",
    a: "Yes, web development is a very good career choice in 2026. Businesses, startups, and companies of all sizes need websites and web applications. Skilled web developers are in high demand, and opportunities exist in jobs, freelancing, and remote work.",
  },
  {
    q: "Do I need coding experience before joining IIDAD?",
    a: "No, you do not need any prior coding experience. IIDAD web development courses are specially designed for complete beginners. Trainers explain concepts in a simple way, making it easy for anyone to learn.",
  },
  {
    q: "Does IIDAD provide practical training and real projects?",
    a: "Yes, IIDAD focuses heavily on practical training. Students work on real-world projects such as business websites, landing pages, and web applications. This practical exposure helps students gain confidence and industry-ready skills.",
  },
  {
    q: "Can I get a job after completing a web development course from IIDAD?",
    a: "Yes, many students get entry-level web developer jobs after completing courses from IIDAD. The institute provides resume building, interview preparation, and placement assistance, which helps students prepare for job opportunities.",
  },
  {
    q: "Will AI replace web developers?",
    a: "AI will not replace web developers, but it will change how developers work. Developers who learn modern tools, frameworks, and AI-assisted development will have more career opportunities and better productivity.",
  },
];

export default function HomeSection6() {
  return <Faqs items={items} />;
}
