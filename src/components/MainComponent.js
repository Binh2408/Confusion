import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Contact from './ContactComponent';
import Counter from "./Counter";
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

import store from "../shared/store"
const mapDispatchToProps = (dispatch) => ({

  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});

const mapStateToProps = (state) => ({

  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
}
);
class Main extends Component {

  constructor(props) {
    super(props);
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}

        />
      );
    };


    const DishWithId = () => {
      const { dishId } = useParams();

      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          addComment={this.props.addComment} />



      );
    };

    return (
      <div>
        <Header />
        {/* <Provider store={store}>
        <Counter />
         </Provider>  */}
        <Routes>
          <Route path='/home' Component={HomePage} />
          <Route exact path='/menu' element={<Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
          {/* <Route exact path='/menu' Component={() => <Menu dishes={this.props.dishes} />} /> */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/contactus' Component={Contact} />
          <Route path='/menu/:dishId' Component={DishWithId} />
        </Routes>


        {/* <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />

        <Footer />
      </div>
    );
  }
}



export default (connect(mapStateToProps, mapDispatchToProps)(Main));

