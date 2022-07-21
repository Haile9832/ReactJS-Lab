import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = () => {
      const dishId = useParams();
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === Number(dishId.dishId)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === Number(dishId.dishId)
          )}
        />
      );
    };
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
            <Route path="/aboutus" element={<About leaders={this.state.leaders}/>} />
            <Route path="/menu/:dishId" element={<DishWithId />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
