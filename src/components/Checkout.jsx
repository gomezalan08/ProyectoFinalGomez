import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/config';

const Checkout = () => {
    // Estados para guardar los datos del formulario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    
    // Estados para manejar errores y el ID de la compra final
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    // Traemos el carrito del Contexto
    const { cart, total, clearCart } = useContext(CartContext);

    // Función que se ejecuta cuando el usuario le da a "Comprar"
    const manejadorFormulario = (e) => {
        e.preventDefault(); // Evitamos que la página se recargue

        // 1. Validamos que no haya campos vacíos
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos.");
            return;
        }

        // 2. Validamos que los emails coincidan
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden.");
            return;
        }

        // 3. Creamos el objeto de la orden con los datos del cliente y los productos
        const orden = {
            comprador: { nombre, apellido, telefono, email },
            items: cart.map(producto => ({
                id: producto.id,
                nombre: producto.name,
                precio: producto.price,
                cantidad: producto.quantity
            })),
            total: total,
            fecha: new Date()
        };

        // 4. Guardamos la orden en Firebase (en una nueva colección llamada "ordenes")
        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id); // Guardamos el ID que nos da Firebase
                clearCart(); // Vaciamos el carrito porque ya compró
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Hubo un error al procesar la orden. Intenta de nuevo.");
            });
    };

    // Renderizado Condicional: Si ya hay un ID de orden, mostramos el mensaje de éxito
    if (ordenId) {
        return (
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <h2>¡Gracias por tu compra, {nombre}! 🎉</h2>
                <p>Tu número de seguimiento es: <strong>{ordenId}</strong></p>
            </div>
        );
    }

    // Si todavía no compró, mostramos el formulario
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Finalizar Compra</h2>
            
            <form onSubmit={manejadorFormulario} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                {/* Mostramos el error si el usuario se equivocó en algo */}
                {error && <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{error}</p>}
                
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ padding: '10px' }} />
                <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required style={{ padding: '10px' }} />
                <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required style={{ padding: '10px' }} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '10px' }} />
                <input type="email" placeholder="Confirmar Email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} required style={{ padding: '10px' }} />
                
                <button type="submit" style={{ padding: '15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}>
                    Confirmar Compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;