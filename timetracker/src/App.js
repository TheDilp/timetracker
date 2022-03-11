import "./App.css";
import HabitCard from "./components/HabitCard/HabitCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="App">
      <ProfileCard />
      <HabitCard />
    </div>
  );
}

export default App;
