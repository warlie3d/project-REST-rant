const React = require('react')
const Default = require('../default')

// GET /places


function index ({places}) {
  let placesFormatted = places.map((place, index) => {
    return (
      <div key={index}>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    ) 
  })
  return (
    <Default>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Default>
)
}


module.exports = index
