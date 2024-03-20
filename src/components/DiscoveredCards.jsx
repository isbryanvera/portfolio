//Es una biblioteca en React que se utiliza para realizar la validación de tipos en tiempo de ejecución.
import PropTypes from 'prop-types';

function DiscoveredCards({total, completed}) {
    return (
      <p>Numero de datos descubiertos {completed} de {total}</p>
    )
}

DiscoveredCards.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};

export { DiscoveredCards }