import { SyntheticEvent } from "react";

export default function EventComponent() {
  const onClick = (e: SyntheticEvent) => {
    const { isTrusted, nativeEvent, target } = e;
    console.log(isTrusted, nativeEvent, target);
  };
  return (
    <div>
      <p>React On Click</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
