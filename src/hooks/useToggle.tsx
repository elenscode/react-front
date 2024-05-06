import { useState } from "react";

export const useToggle = (
  initialChecked: boolean = false
): [boolean, () => void] => {
  const [checked, setChecked] = useState(initialChecked);
  const toggleCheck = () => {
    setChecked((checked) => !checked);
  };
  return [checked, toggleCheck];
};
