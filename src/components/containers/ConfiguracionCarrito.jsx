// ConfiguracionCarrito.js

import { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { useCarrito } from "../../contexts/Carrito";
import { carritoServices } from "../../services/compras";

const ConfiguracionCarrito = () => {
  const { players, setPlayers } = useCarrito();

  const [fields, setFields] = useState({
    nombre: "",
  });


  const removeFromCarrito = (playerId) => {
    const playerIndex = players.findIndex((player) => player.id === playerId);

    if (playerIndex !== -1) {
      if (players[playerIndex].cantidad === 1) {
        const updatedPlayers = players.filter((player) => player.id !== playerId);
        setPlayers(updatedPlayers);
      } else {
        const updatedPlayers = [...players];
        updatedPlayers[playerIndex].cantidad -= 1;
        setPlayers(updatedPlayers);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    carritoServices.createCompra({ nombre: fields.nombre, players }).then(() => {
      setPlayers([]);
      setFields({ nombre: "" });
    });
  };

  const calcularPrecioTotal = () => {
    return players.reduce((total, player) => {
      return total + player.cantidad * player.precio;
    }, 0);
  };

  return (
    <Form style={{ position: "sticky", top: 20 }} onSubmit={handleSubmit}>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={`player-${index}`}>
              <td>
                <img src={player.img} height={50} alt={player.nombre} />
              </td>
              <td>{player.nombre}</td>
              <td>{player.cantidad}</td>
              <td>${player.cantidad * player.precio}</td>
              <td>
                <Button onClick={() => removeFromCarrito(player.id)}>-</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p> Precio total es ${calcularPrecioTotal()}</p>      
      <Button type="submit">Comprar</Button>
    </Form>
  );
};

export default ConfiguracionCarrito;