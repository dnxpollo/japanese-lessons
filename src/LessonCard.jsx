function LessonCard({ title, description, onClick }) {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => onClick(title)}>Ver lição</button>
    </div>
  );
}

export default LessonCard;
