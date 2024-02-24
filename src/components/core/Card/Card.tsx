/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import React, { lazy, useState } from "react";
import classNames from "classnames";
import Lottie from "lottie-react";
import axios from "axios";
import styles from "./card.module.css";
import icons from "../../../assests/animation/icons.json";
import climate from "../../../assests/animation/climate.json";
import load from "../../../assests/animation/load.json";
import pop from "../../../assests/animation/pop.json";
import terr from "../../../assests/animation/terr.json";
import close from "../../../assests/animation/close.json";

interface Resident {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

interface Planet {
  name: string;
  climate: string;
  population: number;
  terrain: string;
  residents: string[];
}

interface CardProps {
  data: Planet[];
  onDataReceived: (dataItem: Planet) => void;
}

function Card({ data, onDataReceived }: CardProps) {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [selectedResidents, setSelectedResidents] = useState<Resident[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showResidentModal, setShowResidentModal] = useState<boolean>(false);
  const [selectedResident, setSelectedResident] = useState<Resident | null>(
    null
  );

  const handleClick = async (dataItem: Planet) => {
    try {
      setSelectedPlanet(dataItem);

      const residentsData: Resident[] = [];

      for (const residentUrl of dataItem.residents) {
        const response = await axios.get(residentUrl);
        const residentData: Resident = {
          name: response.data.name,
          height: response.data.height,
          mass: response.data.mass,
          gender: response.data.gender
        };
        residentsData.push(residentData);
      }

      setSelectedResidents(residentsData);
      onDataReceived(dataItem);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching resident data:", error);
      setLoading(false);
    }
  };

  const handleResidentClick = (resident: Resident) => {
    setSelectedResident(resident);
    setShowResidentModal(true);
  };

  const closeModal = () => {
    setSelectedResident(null);
    setShowResidentModal(false);
  };

  const style = {
    width: "9%"
  };

  return (
    <section
      id="planet-card"
      className={classNames(styles.planet_card_section_main, "center")}>
      <h1 className={classNames(styles.planet_card_section_heading)}>
        Pagination data
      </h1>
      {data.length > 0 && (
        <div className={classNames(styles.planet_card_section)}>
          {data.map((dataItem) => {
            return (
              <div
                key={dataItem.name}
                className={classNames(styles.planet_card_data)}
                onClick={() => handleClick(dataItem)}>
                <div
                  className={classNames(
                    styles.planet_card_data_content,
                    "center"
                  )}>
                  <div
                    className={classNames(
                      styles.planet_card_data_name,
                      "center"
                    )}>
                    <h2 className="">{dataItem.name}</h2>
                    <Lottie
                      animationData={icons}
                      style={style}
                      download="lazy"
                    />
                  </div>
                  <div className={classNames(styles.planet_card_data_climate)}>
                    <Lottie
                      animationData={climate}
                      style={{ width: "3rem" }}
                      download="lazy"
                    />
                    <p className={classNames(styles.planet_card_data_climates)}>
                      Climate: {dataItem.climate}
                    </p>
                  </div>
                  <div
                    className={classNames(styles.planet_card_data_population)}>
                    <Lottie
                      animationData={pop}
                      style={{ width: "3rem" }}
                      download="lazy"
                    />
                    <p
                      className={classNames(
                        styles.planet_card_data_populations
                      )}>
                      Population: {dataItem.population}
                    </p>
                  </div>
                  <div className={classNames(styles.planet_card_data_terrain)}>
                    <Lottie
                      animationData={terr}
                      style={{ width: "1.3rem" }}
                      download="lazy"
                    />
                    <p className={classNames(styles.planet_card_data_terrains)}>
                      Terrain: {dataItem.terrain}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowResidentModal(true)}
                    className={classNames(styles.button)}>
                    Residency
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showResidentModal && (
        <div className={classNames(styles.modalBackdrop)}>
          <h2>Resident Details</h2>
          {loading ? (
            <Lottie
              animationData={load}
              style={{ width: "60%", alignItems: "center" }}
              download="lazy"
            />
          ) : (
            <div className={styles.modalContent}>
              <button onClick={closeModal} className={styles.closeButton}>
                <Lottie
                  animationData={close}
                  style={{ width: "7rem" }}
                  download="lazy"
                />
              </button>
              {selectedResidents.map((resident, index) => (
                <div key={index} className={classNames(styles.list_container)}>
                  <ul className={classNames(styles.list_container_list)}>
                    <li>Name: {resident.name}</li>
                    <li>Height: {resident.height}</li>
                    <li>Mass: {resident.mass}</li>
                    <li>Gender: {resident.gender}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Card;
