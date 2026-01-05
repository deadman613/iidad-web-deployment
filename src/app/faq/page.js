import Faqs from "@/components/Faqs/Faqs";

export const metadata = {
  title: "Web Development FAQs | IIDAD",
  description:
    "Answers to common questions about coding, full stack development, MERN stack, and career paths.",
  keywords: [
    "web development faqs",
    "coding faqs",
    "full stack development",
    "mern stack roadmap",
    "web development course",
    "full stack developer salary in India",
    "IIDAD",
  ],
  alternates: {
    canonical: "https://www.iidad.com/faq",
  },
};

export default function FaqPage() {
  const items = [
    {
      q: "What is coding in web development?",
      a: "Coding in web development means writing instructions using programming languages to create and manage websites.",
    },
    {
      q: "What are the 4 main types of code used in web development?",
      a: "The four main types are HTML, CSS, JavaScript, and backend programming languages.",
    },
    {
      q: "What are the 5 basic steps to learn coding?",
      a: "Learn basics, practice regularly, build projects, fix errors, and improve continuously.",
    },
    {
      q: "Can I learn coding in 3 months?",
      a: "Yes, you can learn coding basics in 3 months with focused learning and practice.",
    },
    {
      q: "What is full stack development?",
      a: "Full stack development means working on both frontend and backend parts of a website.",
    },
    {
      q: "What skills does a full stack developer need?",
      a: "A full stack developer needs frontend skills, backend knowledge, database understanding, and problem-solving skills.",
    },
    {
      q: "What is the full stack developer salary in India?",
      a: "The average full stack developer salary in India ranges from ₹5 LPA to ₹12 LPA, depending on skills and experience.",
    },
    {
      q: "What is the MERN stack roadmap?",
      a: "The MERN stack roadmap includes HTML, CSS, JavaScript, React, Node.js, MongoDB, and project development.",
    },
    {
      q: "What kind of projects are included in IIDAD courses?",
      a: "Projects include portfolio websites, business websites, and real-world web applications.",
    },
    {
      q: "Are free web development courses enough?",
      a: "Free courses are useful for basics, but professional courses like IIDAD provide structured learning and career support.",
    },
    {
      q: "Is an online web development course with certificate worth it?",
      a: "Yes, if the course includes practical projects, mentorship, and career guidance.",
    },
    {
      q: "Which course is best after 12th for a tech career?",
      a: "Web development and full stack development are excellent career options after 12th.",
    },
  ];

  return (
    <main>
      <Faqs items={items} />
    </main>
  );
}
