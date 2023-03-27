import Card from "./Card"

const skills = [
  {
    name: "Node.js",
    level: "Experienced",
    additionalInfo: "some additonal info"
  },
  {
    name: "React.js",
    level: "Intermediate",
    additionalInfo: "some additonal info"
  },
  {
    name: "Mongodb",
    level: "Adept",
    additionalInfo: "some additonal info"
  },
  {
    name: "Docker",
    level: "Adept",
    additionalInfo: "some additonal info"
  }
]

const Skills = () => {
  return skills.map(item => {
   return (
     <div key={item.name} className="Skill">
      <Card 
        skillName={item.name}
        level={item.level}
        additionalInfo={item.additionalInfo}
      />
    </div>
   )
  })
}

export default Skills