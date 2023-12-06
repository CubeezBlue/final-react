const { createContext, useState, useContext } = require("react");

const CarritoContext = createContext({
  players: [],
});

const CarritoProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <CarritoContext.Provider value={{ players, setPlayers }}>
      {children}
    </CarritoContext.Provider>
  );
};

const useCarrito = () => useContext(CarritoContext);

export { CarritoProvider, CarritoContext, useCarrito };
