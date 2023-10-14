import { useState } from "react";
import "./drawerNav.css";
import { Link } from "react-router-dom";

const DrawerNav = () => {
   const [isDrawerActive, setIsDrawerActive] = useState(false);

   const drawerHandler = async (event) => {
      event.preventDefault();
      if (isDrawerActive) {
         setIsDrawerActive(false);
      } else {
         setIsDrawerActive(true);
      }
   };

   const menuElements = [
      {
         id: 0,
         name: "Headphones",
         subRoutes: [
            {
               id: 0,
               name: "Wireless headphones",
               route: "/header-1/sub-menu-1"
            },
            {
               id: 1,
               name: "Earbuds",
               route: "/header-1/sub-menu-2"
            },
            {
               id: 2,
               name: "Hand free",
               route: "/header-1/sub-menu-2"
            }
         ]
      },
      {
         id: 1,
         name: "Electronics",
         subRoutes: [
            {
               id: 0,
               name: "Data Cable",
               route: "/header-2/sub-menu-1"
            },
            {
               id: 1,
               name: "Bluetooth Speakers",
               route: "/header-2/sub-menu-2"
            },
            // Add an "About Us" link
            {
               id: 2,
               name: "About Us",
               route: "/about"
            }
         ]
      },
   ];

   return (
      <>
         <nav className={"nav"}>
            <div className={"left"}></div>

            <div className={"right"}>
               <div className={"drawer"}>
                  <span className={"button"} onClick={drawerHandler}>
                     &#10596;
                  </span>

                  <div className={!isDrawerActive ? "" : "sideMenu z-100"}>
                     {isDrawerActive && (
                        <div>
                           <div className={"top"}>
                              <h2 className={'header'}>Gadget Glamour</h2>
                              <span className={"button"} onClick={drawerHandler}>
                                 &#10594;
                              </span>
                           </div>
                           <div className={"bottom"}>
                              {menuElements.map((element) => (
                                 <div className={"group"} key={element.id}>
                                    <h3 className={"header"}>{element.name}</h3>
                                    {element.subRoutes.map((subRoute) => (
                                       <div
                                          className={"link"}
                                          onClick={drawerHandler}
                                          key={subRoute.id}
                                       >
                                          {/* Use a standard HTML anchor tag for opening in a new window/tab */}
                                          <Link to={subRoute.route}>
                                             <h5>{subRoute.name}</h5>
                                          </Link>

                                       </div>
                                    ))}
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
};

export default DrawerNav;
