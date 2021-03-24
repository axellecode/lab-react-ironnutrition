import React from 'react';
import './App.scss';
import meals from './meals.json';

class MealBox extends React.Component {
  render() {
    const meal = this.props.meal;

    return (
      <div className="media">
        <img
          src={meal.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
          alt={meal.name}
        />

        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{meal.name}</h5>
          <small>{meal.calories} cal</small>
        </div>

        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value="1" />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

class AddMealForm extends React.Component {
  state = {
    name: '',
    calories: '',
    image: ''
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const meal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    this.props.onAddNewMeal(meal);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name-input"> Meal Name</label>
          <input
            id="name-input"
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />

          <label htmlFor="calories-input"> Calories </label>
          <input
            id="calories-input"
            type="text"
            placeholder="Calories"
            name="calories"
            onChange={this.handleInputChange}
            value={this.state.calories}
          />

          <label htmlFor="name-input"> Image</label>
          <input
            id="image-input"
            type="url"
            placeholder="Image"
            name="image"
            onChange={this.handleInputChange}
            value={this.state.image}
          />

          <button>Add meal</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    meals: meals
  };

  handleMealAddition = (meal) => {
    this.setState({
      meals: [meal, ...this.state.meals]
    });
  };

  render() {
    return (
      <div className="App">
        <AddMealForm onAddNewMeal={this.handleMealAddition} />
        {this.state.meals.map((meal) => (
          <MealBox key={meal.name} meal={meal} />
        ))}
      </div>
    );
  }
}

export default App;
