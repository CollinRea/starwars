import React from 'react';

// This file contains functions that output mostly HTML to use as templates

const personTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.name}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Height:</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>Mass:</td>
            <td>{data.mass}</td>
          </tr>
          <tr>
            <td>Hair Color:</td>
            <td>{data.hair_color}</td>
          </tr>
          <tr>
            <td>Skin Color:</td>
            <td>{data.skin_color}</td>
          </tr>
          <tr>
            <td>Eye Color:</td>
            <td>{data.eye_color}</td>
          </tr>
          <tr>
            <td>Birth Year:</td>
            <td>{data.birth_year}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{data.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

const planetTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.name}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Rotation Period:</td>
            <td>{data.rotation_period}</td>
          </tr>
          <tr>
            <td>Orbital Period:</td>
            <td>{data.orbital_period}</td>
          </tr>
          <tr>
            <td>Diameter:</td>
            <td>{data.diameter}</td>
          </tr>
          <tr>
            <td>Climate:</td>
            <td>{data.climate}</td>
          </tr>
          <tr>
            <td>Gravity:</td>
            <td>{data.gravity}</td>
          </tr>
          <tr>
            <td>Surface Water:</td>
            <td>{data.surface_water}</td>
          </tr>
          <tr>
            <td>Population:</td>
            <td>{data.population}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

const filmTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.title}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Episode:</td>
            <td>{data.episode_id}</td>
          </tr>
          <tr>
            <td>Opening Crawl:</td>
            <td>{data.opening_crawl}</td>
          </tr>
          <tr>
            <td>Director:</td>
            <td>{data.director}</td>
          </tr>
          <tr>
            <td>Producer:</td>
            <td>{data.producer}</td>
          </tr>
          <tr>
            <td>Release date:</td>
            <td>{data.release_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

const speciesTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.name}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Classification:</td>
            <td>{data.classification}</td>
          </tr>
          <tr>
            <td>Designation:</td>
            <td>{data.designation}</td>
          </tr>
          <tr>
            <td>Average Height:</td>
            <td>{data.average_height}</td>
          </tr>
          <tr>
            <td>Skin Colors:</td>
            <td>{data.skin_colors}</td>
          </tr>
          <tr>
            <td>Hair Colors:</td>
            <td>{data.hair_colors}</td>
          </tr>
          <tr>
            <td>Eye Colors:</td>
            <td>{data.eye_colors}</td>
          </tr>
          <tr>
            <td>Average Lifespan:</td>
            <td>{data.average_lifespan}</td>
          </tr>
          <tr>
            <td>Language:</td>
            <td>{data.language}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

const vehicleTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.name}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Model:</td>
            <td>{data.model}</td>
          </tr>
          <tr>
            <td>Manufacturer:</td>
            <td>{data.manufacturer}</td>
          </tr>
          <tr>
            <td>Cost(in credits):</td>
            <td>{data.cost_in_credits}</td>
          </tr>
          <tr>
            <td>Length:</td>
            <td>{data.length}</td>
          </tr>
          <tr>
            <td>Max Speed:</td>
            <td>{data.max_atmosphering_speed}</td>
          </tr>
          <tr>
            <td>Crew:</td>
            <td>{data.crew}</td>
          </tr>
          <tr>
            <td>Passengers:</td>
            <td>{data.passengers}</td>
          </tr>
          <tr>
            <td>Cargo Capacity:</td>
            <td>{data.cargo_capacity}</td>
          </tr>
          <tr>
            <td>Consumables:</td>
            <td>{data.consumables}</td>
          </tr>
          <tr>
            <td>Vehicle Class:</td>
            <td>{data.vehicle_class}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

const starshipTemplate = (data) => {
  const dataDisplay = (
    <div className="details-container">
      <h1 className="details-title">{data.name}</h1>
      <table className="details-specifics">
        <tbody>
          <tr>
            <td>Model:</td>
            <td>{data.model}</td>
          </tr>
          <tr>
            <td>Manufacturer:</td>
            <td>{data.manufacturer}</td>
          </tr>
          <tr>
            <td>Cost(in credits):</td>
            <td>{data.cost_in_credits}</td>
          </tr>
          <tr>
            <td>Length:</td>
            <td>{data.length}</td>
          </tr>
          <tr>
            <td>Max Speed:</td>
            <td>{data.max_atmosphering_speed}</td>
          </tr>
          <tr>
            <td>Crew:</td>
            <td>{data.crew}</td>
          </tr>
          <tr>
            <td>Passengers:</td>
            <td>{data.passengers}</td>
          </tr>
          <tr>
            <td>Cargo Capacity:</td>
            <td>{data.cargo_capacity}</td>
          </tr>
          <tr>
            <td>Consumables:</td>
            <td>{data.consumables}</td>
          </tr>
          <tr>
            <td>Hyperdrive Rating:</td>
            <td>{data.hyperdrive_rating}</td>
          </tr>
          <tr>
            <td>MGLT:</td>
            <td>{data.MGLT}</td>
          </tr>
          <tr>
            <td>Starship Class:</td>
            <td>{data.starship_class}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return dataDisplay;
}

export default {
  personTemplate,
  planetTemplate,
  filmTemplate,
  speciesTemplate,
  vehicleTemplate,
  starshipTemplate
};