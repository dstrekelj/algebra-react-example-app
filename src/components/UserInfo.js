import { getRandomColor, getRandomName } from "../helpers/random";
import Greet from "./Greet";

export default function UserInfo() {
  const color = getRandomColor();

  return (
    <Greet greeting="Sent by" name={getRandomName()}>
      (Color: <span style={{ color: color }}>{color}</span>)
    </Greet>
  );
}
