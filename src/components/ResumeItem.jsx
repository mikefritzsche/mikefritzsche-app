const ResumeItem = ({ item }) => {

  console.log('resume item: ', item)
  return (
    <div className="resume-item">
      {item.professionExperience.map((profession, index) => (
        <div key={index}>
          <h3 className="resume-item__title">{profession.positionName} | {profession.dateStart} - {profession.dateEnd}</h3>
          <ul>
            {profession.keyTasks.map((keyTask) => (
              <li key={keyTask}>{keyTask}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ResumeItem
