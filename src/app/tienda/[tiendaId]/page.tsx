async function loadProd(id){
   const res = await fetch(`https://dummyjson.com/products/${id}`);
   const data = await res.json();
    return data;
}
async function PaginaProducto({params}) {
   const product = await loadProd(params.tiendaId)
    return (
        <div>
            <img src={product.thumbnail} alt=""/>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
    )
}

export default PaginaProducto