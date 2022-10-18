import Item from "./Item";
import './itemList.css'; 

const ItemList = ({ products = [] }) => {
    return (
        <div className="d-flex flex-wrap justify-content-between py-5 ">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemList;