import Goal from "./Goal";

function GoalList() {
  return (
    <ul>
      <Goal
        title="Teach React in a highly-undestandable way"
        description="I want to ensure that you got the most out of this book."
      />
      <Goal
        title="Allow you to practice what you learned"
        description="Using the exercises to prepare you."
      />
      <Goal
        title="Motivate you to continue learning"
        description="As a developer, learning never ends."
      />
    </ul>
  );
}

export default GoalList;
