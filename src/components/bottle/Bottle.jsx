import './Bottle.css'
const Bottle = ({ bottle ,handleAddToCart}) => {
    const { name, img,price,stock,ratings } = bottle;
    return (
        <div className='bottle-cart '>
            {/* <img src={singlebottleinfo.image}></img> */}

            <img src={img} ></img>
            <h4>{name}</h4>
            <h4>${price}</h4>
            <h4><span>Remaining Product : {stock}</span> <span>|</span> <span>Rating : {ratings}</span></h4>
            <button style={{backgroundColor:"green",}} onClick={()=>handleAddToCart(bottle)}>Add to cart</button>
        </div>
    );
};

export default Bottle;