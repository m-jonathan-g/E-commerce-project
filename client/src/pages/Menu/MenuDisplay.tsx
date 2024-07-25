import { Link } from "react-router-dom"
import './Menu.css'
import { Navbar } from "../../components/Navbar/Navbar"

export const MenuDisplay = () => {
  return (
    <>
    <Navbar/>
    <div className="menu-display">
        <h1 className="heading">Blue Farm  Menu</h1>
        <div className="menu-category">
        <h2 className="selection-h2">Selections Available</h2>
        <ul>
          <li>
           <h2 className="selection-title">Breakfast</h2>
         
            <ul>
              <li>
                <Link to="/menu/breakfast/sandwiches">Sandwiches</Link>
              </li>
              <li>
                <Link to="/menu/breakfast/eggs">Eggs</Link>
              </li>
              <li>
                <Link to="/menu/breakfast/cakes">Cakes</Link>
              </li>
              <li>
                <Link to="/menu/breakfast/pancakes">Pancakes</Link>
              </li>
             
              <li>
                <Link to="/menu/breakfast/breads">Breads & Buns</Link>
              </li>
              <li>
                <Link to="/menu/breakfast/fruits">Fruit Meals</Link>
              </li>
              <li>
                <Link to="/menu/breakfast/breakfast-extras">Extras</Link>
              </li>
            </ul>
          </li>
          <li>
           <h2  className="selection-title">Main Course</h2>
          
           <ul>
            <li>
              <Link to="/menu/maincourse/pizzas">Pizzas</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/seafood">Sea Food</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/rice">Rice Dishes</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/combos">Combos</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/meats">Meat Dishes</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/vegan">Vegan Dishes</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/kids">Kiddie Meals</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/burgers">Burgers</Link>
            </li>
            <li>
              <Link to="/menu/maincourse/mains-extras">Extras</Link>
            </li>
           </ul>
          </li>
          <li>
            <h2  className="selection-title">Drinks</h2>
          
            <ul>
              <li>
                <Link to="/menu/drinks/softdrinks">Soft Drinks</Link>
              </li>
              <li>
                <Link to="/menu/drinks/fruitdrinks">Fruit Drinks</Link>
              </li>
              <li>
                <Link to="/menu/drinks/smoothies">Smoothies</Link>
              </li>
              <li>
                <Link to="/menu/drinks/yoghurts">Yoghurts</Link>
              </li>
              <li>
                <Link to="/menu/drinks/milkshakes">Milk Shakes</Link>
              </li>
              <li>
                <Link to="/menu/drinks/tea & coffee">Tea & Coffee</Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="selection-title">Desserts</h2>
           
            <ul>
              <li>
                <Link to="/menu/desserts/icecreams">Ice Creams</Link>
              </li>
              <li>
                <Link to="/menu/desserts/sweets">Sweets</Link>
              </li>
            </ul>
          </li>
        </ul>
        </div>
    </div>
    </>
  )
}
