import { useState } from "react";
import "./Person.scss";

export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  const [showInfo, setShowInfo] = useState<boolean | null>(null);
  const [bio, setBio] = useState<string | null>(null);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };
  return (
    <div>
      {showInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>This person {props.isMarried ? "is married" : "is not married"}</p>
        </>
      )}
      <p>
        {props.name} Bio:{!bio ? "No Bio Available" : bio}
      </p>
      <div className='inputButtonCon'>
        <input onChange={handleChange} />
        <button onClick={toggleInfo}>Toggle info of {props.name}</button>
      </div>
    </div>
  );
};
