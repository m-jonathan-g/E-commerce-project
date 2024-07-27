import { Link } from "react-router-dom"
import './Menu.css'
import { Navbar } from "../../components/Navbar/Navbar"

export const MenuDisplay = () => {
  return (
    <>
    <Navbar/>
    <div className="menu-display">
       <img src="/menu2.png" alt="" className="menu-banner"/>
        <div className="menu-category">
          
        <ul className="menu">
          <li>
           <h2 className="selection-title">Breakfast</h2>
         
            <ul className="menu-subselections">
              <li>
                <Link to="/menu/breakfast/sandwiches"><img src="/sandwiches.jpg" alt="" className="menu-image" /></Link>
                <h2>Sandwiches</h2>
              </li>
              <li>
                <Link to="/menu/breakfast/eggs"><img src="/egg2.jpg" alt=""  className="menu-image" /></Link>
                <h2>Eggs</h2>
              </li>
              <li>
                <Link to="/menu/breakfast/cakes"><img src="/cakes.jpg" alt=""  className="menu-image"/></Link>
                <h2>Cakes</h2>
              </li>
              <li>
                <Link to="/menu/breakfast/pancakes"><img src="/pancake.jpg" alt="" className="menu-image"/></Link>
                <h2>Pancakes</h2>
              </li>
             
              <li>
                <Link to="/menu/breakfast/breads"><img src="/buns.jpg" alt=""  className="menu-image"/></Link>
                <h2>Breads & Buns</h2>
              </li>
              <li>
                <Link to="/menu/breakfast/fruits"><img src="/fruits-breakfast.jpg" alt="" className="menu-image"/></Link>
                <h2>Fruits</h2>
              </li>
              <li>
                <Link to="/menu/breakfast/breakfast-extras"><img src="/b-extra.jpg" alt="" className="menu-image" /></Link>
                <h2>Breakfast Extras</h2>
              </li>
            </ul>
          </li>
          <li>
           <h2  className="selection-title">Main Course</h2>
          
           <ul className="menu-subselections">
            <li>
              <Link to="/menu/maincourse/pizzas"><img src="/pizza.jpg" alt="" className="menu-image" /></Link>
              <h2>Pizzas</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/seafood"><img src="/seafood.jpg" alt="" className="menu-image" /></Link>
              <h2>Seafood</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/rice"><img src="/rice.jpg" alt="" className="menu-image" /></Link>
              <h2>Rice Dishes</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/combos"><img src="/combo2.jpg" alt="" className="menu-image" /></Link>
              <h2>Combos</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/meats"><img src="meat.jpg" alt="" className="menu-image" /></Link>
              <h2>Meat Dishes</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/vegan"><img src="/vegan.jpg" alt="" className="menu-image" /></Link>
              <h2>Vegan Dishes</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/kids"><img src="/kids.jpg" alt="" className="menu-image" /></Link>
              <h2>Kiddie Meals</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/burgers"><img src="/burger.jpg" alt="" className="menu-image" /></Link>
              <h2>Burgers</h2>
            </li>
            <li>
              <Link to="/menu/maincourse/mains-extras"><img src="/extra.jpg" alt="" className="menu-image" /></Link>
              <h2>Main Course Extras</h2>
            </li>
           </ul>
          </li>
          <li>
            <h2  className="selection-title">Drinks</h2>
          
            <ul className="menu-subselections">
              <li>
                <Link to="/menu/drinks/softdrinks"><img src="/softdrinks.jpg" alt="" className="menu-image" /></Link>
                <h2>Soft Drinks</h2>
              </li>
              <li>
                <Link to="/menu/drinks/fruitdrinks"><img src="/fruitdrink.jpg" alt="" className="menu-image" /></Link>
                <h2>Fruit Drinks</h2>
              </li>
              <li>
                <Link to="/menu/drinks/smoothies"><img src="/smoothie.jpg" alt="" className="menu-image" /></Link>
                <h2>Smoothies</h2>
              </li>
              <li>
                <Link to="/menu/drinks/yoghurts"><img src="/yoghurt.jpg" alt="" className="menu-image" /></Link>
                <h2>Yoghurts</h2>
              </li>
              <li>
                <Link to="/menu/drinks/milkshakes"><img src="/milkshake.jpg" alt="" className="menu-image" /></Link>
                <h2>Milkshakes</h2>
              </li>
              <li>
                <Link to="/menu/drinks/tea & coffee"><img src="/coffee.jpg" alt="" className="menu-image" /></Link>
                <h2>Tea & Coffee</h2>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="selection-title">Desserts</h2>
           
            <ul className="menu-subselections">
              <li>
                <Link to="/menu/desserts/icecreams"><img src="/icescreams.jpg" alt="" className="menu-image" /></Link>
                <h2>Ice Creams</h2>
              </li>
              <li>
                <Link to="/menu/desserts/sweets"><img src="/macaroon.jpg" alt="" className="menu-image" /></Link>
                <h2>Sweets</h2>
              </li>
            </ul>
          </li>
        </ul>
        </div>
    </div>
    </>
  )
}
