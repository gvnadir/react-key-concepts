import { useEffect, useState } from "react";

function useKeyEvent(allowedKeys) {
  const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function keyPressedHandler(event) {
      const pressedKey = event.key;

      if (!allowedKeys.includes(pressedKey)) {
        alert("Invalid key!");
        return;
      }
      setPressedKey(pressedKey);
    }

    // too have all the logic inside the componentDidMount I prevent potential memory leaks
    // that might be caused by the eventListener created every time the component re-renders.
    window.addEventListener("keydown", keyPressedHandler);

    return () => {
      window.removeEventListener("keydown", keyPressedHandler);
    };
  }, []);

  return pressedKey;
}

export default useKeyEvent;
