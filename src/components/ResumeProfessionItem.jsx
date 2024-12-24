const ResumeProfessionItem = ({ item }) => {
  return (
    <div className="resume-item">
      <div className="resume-item__header">
        <div>
          <h3 className="resume-item__title">{item.positionName}</h3>
          <div className="resume-item__company">{item.title}</div>
        </div>
        <div className="resume-item__date">
          {item.dateStart} - {item.dateEnd}
        </div>
      </div>
      <ul className="resume-item__tasks">
        {item.keyTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeProfessionItem;
