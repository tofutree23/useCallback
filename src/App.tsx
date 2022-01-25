import { useState } from "react";
import Favorite from "./Favorite";

export interface IPerson {
  name: string;
  favorites: string[];
}

function App() {
  const initialPerson: IPerson = {
    name: "jake",
    favorites: ["soccer", "basketball"],
  };

  const [person, setPerson] = useState<IPerson>(initialPerson);

  const handleEditFavorite = (idx: number, value: string) => {
    const updatedFavorites = [...person.favorites];
    updatedFavorites.splice(idx, 1, value);
    setPerson({ ...person, favorites: updatedFavorites });
  };

  return (
    <div>
      {person.favorites.map((favorite, idx) => (
        <Favorite
          key={`${favorite}_${idx}`}
          idx={idx}
          favorites={person.favorites}
          favorite={favorite}
          handleEditFavorite={handleEditFavorite}
        />
      ))}
    </div>
  );
}

export default App;
