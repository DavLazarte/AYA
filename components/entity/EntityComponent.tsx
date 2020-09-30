import Router from "next/router";
import styles from "../../styles/Home.module.css";

const Entity = (props) => {
  return (
    <div>
      <h1>{props.entities.category}</h1>
      <ul className="list-group">
        {props.entities.map(entity => (
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={entity._id}>
            <h3>Nombre: {entity.name} &rarr;</h3>
            <p>Dirección: {entity.location.address}</p>
            <p>Contacto: {entity.contact.cellphone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entity;
