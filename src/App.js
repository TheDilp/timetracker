import { useEffect, useState } from "react";
import "./App.css";
import HabitCard from "./components/HabitCard/HabitCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  const [habits, setHabits] = useState([]);
  const [selectedMode, setSelectedMode] = useState("Weekly");
  async function fetchHabits() {
    const res = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    const data = await res.json();

    return setHabits(data);
  }

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className="App">
      <div className="profileCardContainer">
        <ProfileCard
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      </div>
      <div className="habitCardsContainer">
        {habits.map((habit, index) => (
          <HabitCard key={index} selectedMode={selectedMode} habit={habit} />
        ))}
      </div>
    </div>
  );
}

export default App;