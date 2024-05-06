import { useContext, useEffect } from "react";

import { UserContext } from "./contexts";

export type ClockProps = {
  today: Date;
};

const Clock = ({ today }: ClockProps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const value = useContext(UserContext);

  useEffect(() => {
    if (value) {
      console.log(value);
    }
  }, [value]);

  return (
    <div>
      <p>{today.toLocaleTimeString()}</p>
      <p>{today.toLocaleDateString()}</p>
    </div>
  );
};

export default Clock;
