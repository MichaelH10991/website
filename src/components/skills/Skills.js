import Card from "./Card";

const Skills = ({ skills }) => {
  return skills.map((item) => {
    return (
      <div key={item.name} className="Skill-grid">
        <Card
          skillName={item.name}
          level={item.level}
          additionalInfo={item.additionalInfo}
          links={item.links}
          rating={item.rating}
        />
      </div>
    );
  });
};

export default Skills;
