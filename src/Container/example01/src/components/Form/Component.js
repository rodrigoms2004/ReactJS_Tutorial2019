import React from 'react'

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>  
        <input 
          type="text" 
          name="firstName" 
          value={props.data.firstName} 
          onChange={props.handleChange} 
          placeholder="First Name" 
        />
        <br />
        <input 
          type="text" 
          name="lastName" 
          value={props.data.lastName} 
          onChange={props.handleChange} 
          placeholder="Last Name" 
        />
        <br />
        <input 
          type="number" 
          name="age" 
          value={props.data.age} 
          onChange={props.handleChange} 
          placeholder="Age" 
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
        
        <br />
        
        <label>
          Select your destination:
          <select
            value={props.data.destination}
            onChange={props.handleChange}
            name="destination"
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Sahara Desert">Sahara Desert</option>
            <option value="New York">New York</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </select>
        </label>
        <br />
        
        <label> 
          <input 
            type="checkbox"
            name="isVegan"
            checked={props.data.dietaryRestrictions.isVegan}
            onChange={props.handleChange}
          /> Vegan?
        </label>
        <br />

        <label> 
          <input 
            type="checkbox"
            name="isKosher"
            checked={props.data.dietaryRestrictions.isKosher}
            onChange={props.handleChange}
          /> Kosher?
        </label>
        <br />

        <label> 
          <input 
            type="checkbox"
            name="isLactoseFree"
            checked={props.data.dietaryRestrictions.isLactoseFree}
            onChange={props.handleChange}
          /> Lactose free?
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
          Your dietary restrictions: {props.getDietaryRestrictions(props.data)}
      </p>
    </main>
  )
}

export default FormComponent