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

import store from "../shared/store"
import { actions } from 'react-redux-form';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
const mapDispatchToProps = (dispatch) => ({

  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())


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
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();

  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}

        />
      );
    };


    const DishWithId = () => {
      const { dishId } = useParams();

      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
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
          <Route exact path='/contactus' Component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path='/menu' Component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' Component={DishWithId} />

        </Routes>


        {/* <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}


        <Footer />
      </div>
    );
  }
}



export default (connect(mapStateToProps, mapDispatchToProps)(Main));

