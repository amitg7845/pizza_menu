import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}

function Header() {
    // const style = { color: "red", fontSize: "50px", transform: "uppercase" }
    const style = {}
    return <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    const pizzas = pizzaData.length;
    return <main className="menu">
        <h2>Our Menu</h2>
        {
            // conditional rendering with ternaries
            pizzas > 0 ? (
                <React.Fragment>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet </p>

                    <ul className="pizzas">
                        {pizzaData.map((pizza) =>
                            <Pizza pizzaObj={pizza} key={pizza.id} />
                            // <Pizza name={pizza.name} photoName = {pizza.photoName} />
                        )}
                    </ul>
                </React.Fragment>) : <p>We're still working on our menu. Please come back later :)</p>
        }
        {/* <Pizza name="Pizza Prosciutto" photoName="pizzas/prosciutto.jpg" ingredients="Pomato, mozarella, ham, aragula, and burrata cheese" price={10} /> */}
        {/* <Pizza name="Pizza Margherita" photoName="pizzas/margherita.jpg" ingredients="Tomato and mozarella" price={12} /> */}
    </main>

}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // conditional rendering with &&
    return <footer className="footer">{isOpen && <Order closeHour={closeHour} openHour={openHour} />
    }</footer >
    // return React.createElement("footer", null, "We're currently opne!");
}

function Order({ closeHour, openHour }) {
    return <div className="order">
        <p>
            We're open from {openHour} : 00 until {closeHour}: 00 Come visit us or order online.
        </p> <button className="btn">Order</button>
    </div>
}

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
        id: 1
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
        id: 2
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
        id: 3
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
        id: 4
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
        id: 5
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
        id: 6
    },
];

function Pizza({ pizzaObj }) {
    // Used descturing instead of props
    // conditional rendering with multiple returns
    // if (pizzaObj.soldOut) return null;
    return <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
        {/* <img src={photoName} alt={name} /> */}
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        </div>
    </li>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Use during development for twice calling components and checking outdated api.
    <React.StrictMode>
        <App />
    </React.StrictMode>)
