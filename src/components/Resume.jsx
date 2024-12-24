import { data } from '../data/resume';
import ResumeProfessionItem from './ResumeProfessionItem';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-header__name">{data.name}</h1>
        <div className="resume-header__contact">{data.address}</div>
        <div className="resume-header__social">
          {data.socialLinks.map((socialLink) => (
            <a key={socialLink.name} href={socialLink.link} target="_blank" rel="noopener noreferrer">
              {socialLink.name}
            </a>
          ))}
        </div>
      </div>

      <section className="resume-section">
        <h2 className="resume-section__title">Summary</h2>
        <div className="resume-section__content">{data.summary}</div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section__title">Skills</h2>
        <div className="skills-list">
          {data.skills.map((skill, index) => (
            <div key={index} className="skills-list__item">{skill}</div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section__title">Professional Experience</h2>
        {data.professionExperience.map((profession) => (
          <ResumeProfessionItem key={profession.title} item={profession} />
        ))}
      </section>

      <section className="resume-section">
        <h2 className="resume-section__title">Education</h2>
        <div className="resume-section__content">{data.education}</div>
      </section>
    </div>
  );
};

export default Resume;
