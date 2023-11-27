import { useNavigate } from "react-router-dom";
import ProductoGird from "../common/ProductoGrid";
import { useCarrito } from "../../contexts/Carrito";

const ProductosContainer = ({ items }) => {
  const navigate = useNavigate();
  const { players, setPlayers } = useCarrito();

  const addToCarrito = (newPlayer) => {
    const existingPlayerIndex = players.findIndex(
      (player) => player.id === newPlayer.id
    );

    if (existingPlayerIndex !== -1) {
      const updatedPlayers = [...players];
      updatedPlayers[existingPlayerIndex].cantidad += 1;
      setPlayers(updatedPlayers);
    } else {
      setPlayers((prevPlayers) => [...prevPlayers, { ...newPlayer, cantidad: 1 }]);
    }
  };

  return (
    <ProductoGird
      items={items.map((item) => ({
        ...item,
        style: {
          img: {
            width: "100%",
            height: 263,
            objectFit: "cover",
          },
        },
        actions: [
          {
            onClick: () => {
              navigate(`/productos/${item.nombre}`);
            },
            content: "Abrir",
          },
          {
            onClick: () => addToCarrito(item),
            content: "+",
          },
        ],
      }))}
    />
  );
};

export default ProductosContainer;