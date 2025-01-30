import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";


const ExploreMenu = ({ category, setcategory }) => {
	return (
		<div className="explore-menu" id="explore-menu">
			<h1>Explore Our Menu</h1>
			<p className="explore-menu-text">
				Discover a menu that blends artistry with flavor, offering delectable
				cookies and irresistible pastries. Each creation is crafted to delight
				your taste buds, turning every bite into a celebration of sweetness and
				elegance.
			</p>
			<div className="explore-menu-list">
				{menu_list.map((item, index) => {
					return (
						<div
							onClick={() =>
								setcategory(prevCategory =>
									prevCategory === item.menu_name ? "All" : item.menu_name
								)
							}
							key={index}
							className="explore-menu-list-item"
						>
							<img
								className={category === item.menu_name ? "active" : ""}
								src={item.menu_image}
								alt={item.menu_name}
							/>
							<p>{item.menu_name}</p>
						</div>
					);
				})}
			</div>
			<hr />
		</div>
	);
};

export default ExploreMenu;

