import { useState } from 'react';

function StateExample3() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h2>{isOn ? "💡 Light is ON" : "🌑 Light is OFF"}</h2>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
  );
}
export default StateExample3;
