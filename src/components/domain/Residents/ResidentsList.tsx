/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-array-index-key */
// ResidentsList.tsx

import classNames from "classnames";
import React from "react";

interface Resident {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

interface ResidentsListProps {
  residents: Resident[];
}

const ResidentsList: React.FC<ResidentsListProps> = ({ residents }) => {
  return (
    <div>
      <h2>Residents:</h2>
      <ul className={classNames("flex")}>
        {residents.map((resident, index) => (
          <li key={index}>
            <p>Name: {resident.name}</p>
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentsList;
