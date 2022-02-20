import { useState, useCallback, useMemo } from "react";
import _ from "lodash";

interface IFavorite {
  idx: number;
  favorites: string[];
  favorite: string;
  handleEditFavorite: (idx: number, value: string) => void;
}
export default function Favorite({
  idx,
  favorites,
  favorite,
  handleEditFavorite,
}: IFavorite) {
  const [tempFavorite, setTempFavorite] = useState<string>(favorite);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setTempFavorite(value);
    handleUpdateFavorite(value);
  };

  const handleUpdateFavorite = useMemo(
    () =>
      _.debounce((value) => {
        console.log("value", value);
        handleEditFavorite(idx, value);
      }, 500),
    [favorite]
  );

  return (
    <input
      defaultValue={favorite}
      value={tempFavorite}
      onChange={handleChange}
    />
  );
}
