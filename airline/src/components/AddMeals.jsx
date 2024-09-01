import React, { useState, useEffect } from 'react';
import FlightHeader from '../components/FlightHeader';
import AddBaggage from './AddBaggage';

const AddMeals = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Meals');
  const [activeComponent, setActiveComponent] = useState('meals');
  const [sortOption, setSortOption] = useState('price'); // default sorting by price
  const [selectedMeals, setSelectedMeals] = useState([]); // state to store selected meals
  const [quantitySelector, setQuantitySelector] = useState(null); // state to manage the inline quantity selector
  const [meals, setMeals] = useState([]); // state to store meal data

  const bookingId = sessionStorage.getItem('bookingId');
console.log('Booking ID:', bookingId);


  useEffect(() => {
    // Fetch meal data from JSON Server
    fetch('http://localhost:8000/MealsData')
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error('Error fetching meals:', error));
  }, []);

  const formatPrice = (price) => {
    // Assuming currency is a variable you have set elsewhere in your app
    if (currency === 'USD') {
      return `USD ${(parseInt(price.replace(/[^\d]/g, '')) / 280).toFixed(2)}`;
    }
    if (currency === 'EUR') {
      return `EUR ${(parseInt(price.replace(/[^\d]/g, '')) / 320).toFixed(2)}`;
    }
    return price;
  };

  // Filter meals based on selected category
  const filteredMeals =
    selectedCategory === 'All Meals'
      ? meals
      : meals.filter((meal) => meal.category === selectedCategory);

  // Function to convert price to number for sorting and calculating total
  const parsePrice = (price) => {
    if (price === 'Free') return 0;
    return parseInt(price.replace(' Rs', '').replace(/,/g, '')) || 0;
  };

  // Sort meals based on the selected sort option
  const sortedMeals = [...filteredMeals].sort((a, b) => {
    if (sortOption === 'price') {
      return parsePrice(a.price) - parsePrice(b.price);
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Function to handle adding a meal to the selected meals list
  const handleAddMeal = (meal, quantity = 1) => {
    if (meal.price === 'Free') {
      // Check if the free meal is already in the selectedMeals list
      const isMealAlreadySelected = selectedMeals.some(
        (selectedMeal) => selectedMeal.id === meal.id
      );
      if (isMealAlreadySelected) {
        alert("This free meal has already been added.");
        return;
      }
    }

    // Add meal with specified quantity
    setSelectedMeals((prevSelectedMeals) => [
      ...prevSelectedMeals,
      { ...meal, quantity },
    ]);
  };

  // Calculate the total bill for selected meals
  const totalBill = selectedMeals.reduce(
    (total, meal) => total + parsePrice(meal.price) * meal.quantity,
    0
  );

  // Store the total bill in sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('totalBill', totalBill);
  }, [totalBill]);
  const handleConfirmSelection = async () => {
    try {
      const bookingId = sessionStorage.getItem('bookingId');
      if (!bookingId) {
        console.error('Booking ID not found in sessionStorage');
        return;
      }
  
      // Prepare meals data with bookingId and numerical price
      const mealsToSave = selectedMeals.map(meal => ({
        name: meal.name,
        price: parsePrice(meal.price),
        quantity: meal.quantity,
        bookingId: bookingId,  // Include bookingId with each meal
      }));
  
      const response = await fetch('http://localhost:8002/api/selected-meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mealsToSave),
      });
  
      if (response.ok) {
        console.log('Meals saved successfully');
      } else {
        console.error('Failed to save meals');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setActiveComponent('add-baggage');
  };
  

  const renderComponent = () => {
    switch (activeComponent) {
      case 'add-baggage':
        return <AddBaggage />;
      default:
        return (
          <div className="meals-container">
            <div className="meal-header">
              <h2>Select meals for your trip</h2>
              <a
                href="#"
                className="skip-selection"
                onClick={() => setActiveComponent('add-baggage')}
              >
                Skip Meal Selection
              </a>
            </div>

            {/* Display selected meals */}
            {selectedMeals.length > 0 && (
              <div className="selected-meals">
                <h3>Selected Meals:</h3>
                <ul>
                  {selectedMeals.map((meal, index) => (
                    <li key={index}>
                      {meal.name} - {meal.price} x {meal.quantity}
                    </li>
                  ))}
                </ul>
                {/* Display the total bill */}
                <div className="total-bill">
                  <span className="bill-label">Total Bill:</span> {totalBill} Rs
                </div>
              </div>
            )}

            <div className="search-sort">
              <select
                className="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="price">Sort By Price</option>
                <option value="name">Sort By Name</option>
              </select>
            </div>
            <div className="meal-categories">
              <button
                className={`category ${
                  selectedCategory === 'All Meals' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('All Meals')}
              >
                All Meals
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Hot Breakfast' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Hot Breakfast')}
              >
                Hot Breakfast
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Hot Meals' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Hot Meals')}
              >
                Hot Meals
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Sandwiches' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Sandwiches')}
              >
                Sandwiches
              </button>
              <button
                className={`category ${
                  selectedCategory === 'Salad' ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory('Salad')}
              >
                Salad
              </button>
            </div>
            <div className="meal-items">
              {sortedMeals.map((meal) => (
                <div className="meal-item" key={meal.id}>
                  <div className="meal-description">
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                  </div>
                  <div className="meal-price">{meal.price}</div>
                  {quantitySelector?.id === meal.id ? (
                    <div className="quantity-selector">
                      <button
                        onClick={() =>
                          setQuantitySelector((prev) => ({
                            ...prev,
                            quantity: Math.max(1, prev.quantity - 1),
                          }))
                        }
                      >
                        -
                      </button>
                      <span>{quantitySelector.quantity}</span>
                      <button
                        onClick={() =>
                          setQuantitySelector((prev) => ({
                            ...prev,
                            quantity: prev.quantity + 1,
                          }))
                        }
                      >
                        +
                      </button>
                      <button
                        className="done-button"
                        onClick={() => {
                          handleAddMeal(quantitySelector, quantitySelector.quantity);
                          setQuantitySelector(null);
                        }}
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-meal-button"
                      onClick={() => {
                        if (meal.price !== 'Free') {
                          setQuantitySelector({ ...meal, quantity: 1 });
                        } else {
                          handleAddMeal(meal);
                        }
                      }}
                    >
                      {meal.price !== 'Free' && '+ '}Add This Meal
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="confirm-section">
              <button
                className="confirm-button"
                onClick={handleConfirmSelection}
              >
                Confirm selection
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <FlightHeader />
      <br />
      {renderComponent()} {/* Render the active component */}
    </>
  );
};

export default AddMeals;
