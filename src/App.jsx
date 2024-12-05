// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  const [totalStrength, settotalStrength] = useState(0);
  const [totalAgility, settotalAgility] = useState(0);

  // functions go here
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      settotalStrength(totalStrength + fighter.strength);
      settotalAgility(totalAgility + fighter.agility);
    } else {
      console.log("Not Enough Moolah");
    }
    console.log(`Added `);
  };

  const handleRemoveFighter = (fighterToBeRemoved) => {
    
    setTeam(
      team.reduce((accumulator, currentValue) => {
        if(currentValue !== fighterToBeRemoved) accumulator.push(currentValue)
          return accumulator;
      }, [])
    )
    setMoney(money + fighterToBeRemoved.price);
    settotalStrength(totalStrength - fighterToBeRemoved.strength);
    settotalAgility(totalAgility - fighterToBeRemoved.agility);
  };



  return (
    <>
      <h1>This is Apocalypse</h1>
      <h2>Your Money: {money}</h2>
      {/* display team */}
      <h2>Your Team: </h2>
      {team.length === 0 ? (
        <p>Pick Some Team Members!</p>
      ) : (
        <ul>
          {team.map((fighter, idx) => (
            <li key={idx}>
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick = {() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {/* Team Strength Here */}
      <h4>Team Strength: {totalStrength}</h4>
      {/* Agility here */}
      <h4>Team Agility: {totalAgility}</h4>

      {/* List and purchase below */}
      <ul>
        {zombieFighters.map((fighter, idx) => (
          <li key={idx}>
            {" "}
            <img src={fighter.img} alt="" />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>
              Add to Team
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
