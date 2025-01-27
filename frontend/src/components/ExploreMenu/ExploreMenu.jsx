import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
	return (
		<div className="explore-menu" id="explore-menu">
			<h1>Explore Our Menu</h1>
			<p className="explore-menu-text">
				Discover a menu that blends artistry with flavor, offering delectable
				cookies and irresistible pastries. Each creation is crafted to delight
				your taste buds, turning every bite into a celebration of sweetness and
				elegance
			</p>
			<div className="explore-menu-list">
				{menu_list.map((item, index) => {
					return (
                    <div key={index}className="explore-menu-list-item">
                       <img src={item.menu_image} alt="" /> 
                       <p>{item.menu_name}</p>
                    </div>
                    )
				})}
			</div>
		</div>
	);
};

export default ExploreMenu;
