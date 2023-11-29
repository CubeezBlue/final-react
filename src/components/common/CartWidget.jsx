import { useCarrito } from "../../contexts/Carrito";

const CartWidget = () => {
    const { players } = useCarrito();

    const obtenerNumeroProductos = () => {
        return players.length;
    };

    const FunctionCart = () => {
        const btnCarrito = document.querySelector("#btn-carrito");
        const carritoHTML = document.querySelector(".bg-carrito");
        btnCarrito.addEventListener("click", () => {
            carritoHTML.classList.remove("d-none");
        } )    
    }
    
    return(
        <button id="btn-carrito" className="icon-cart" onClick={FunctionCart}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            <p className="num-cart">{obtenerNumeroProductos()}</p>
        </button>
    )    
}

export default CartWidget;