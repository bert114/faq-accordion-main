const items = [
  {
    question: "What is Frontend Mentor, and how will it help me? ",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "es, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. ",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const handleClick = (e) => {
  const li = e.target.closest("li");
  if (e.target.matches("button")) {
    li.classList.toggle("active");
  }
};

const listItem = items.map((item, index) => {
  const { question, answer } = item;
  return (
    <li key={index} onClick={(e) => handleClick(e)}>
      <div className="trigger">
        <button>{question}</button>
        <button className="chevron"></button>
      </div>
      <div className="answer">{answer}</div>
    </li>
  );
});

export { listItem };
