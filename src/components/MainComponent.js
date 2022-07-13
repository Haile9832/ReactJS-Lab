import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Món ăn</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu
            dishes={DISHES}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <Dishdetail
            selectedDish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
