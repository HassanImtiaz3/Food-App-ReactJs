import styles from './Cart.module.css'

const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "Grilled Chicken",
      price: 35,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];
  
  function Cart({ display }) {
    const filteredFoodData =
      display === "all" ? foodData : foodData.filter((item) => item.type === display);
  
    return (
      <div className={styles.cartContainer}>
        <div className="row">
          {filteredFoodData.map((item, index) => (
            <div className="col-md-4 mx-auto" key={index}>
              <div className={styles.card}>
                <img src={item.image} alt={item.name} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h2>{item.name}</h2>
                  <p>{item.text}</p>
                  <p>Price: ${item.price}</p>
                  <p>Type: {item.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Cart;
  