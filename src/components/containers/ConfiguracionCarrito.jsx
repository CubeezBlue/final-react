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


  const CerrarCarrito = () =>{
    const btnCerrarCarrito = document.querySelector(".btn-cerrar-carrito");
    const carritoHTML = document.querySelector(".bg-carrito");
    btnCerrarCarrito.addEventListener("click", () =>{
        carritoHTML.classList.add("d-none");
    })
}


  return (
    <div className="d-none bg-carrito">
      <button className="btn-cerrar-carrito" onClick={CerrarCarrito}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10l4 4m0 -4l-4 4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>
      </button>
      <div className="ver-carrito">
        <Form style={{ position: "sticky", top: 20 }} onSubmit={handleSubmit}>
          <Table>
              <thead >
                <h3 className="title-carrito">Productos</h3>
              </thead>
              <tbody >
                {players.map((player, index) => (
                  <tr className="productos-carrito" key={`player-${index}`}>
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
      </div>
    </div>
    
  );
};

export default ConfiguracionCarrito;