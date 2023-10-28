const React = require('react')
const Default = require('../default')


// GET /places


function index ({places}) {
  let placesFormatted = places.map((place, index) => {
    return (
      <div key={index}>
        <div className='col'>
          <a href={`/places/${index}`}><h2>{place.name}</h2></a>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} width='250' height='250' crossOrigin='anonymous' />
          <p className='text=center'>Located in {place.city}, {place.state}</p>
        </div>
      </div>

      
    )
  })
  return (
    <Default>
        <main>
        <h1>Places to Rant or Rave About</h1>
        <div className='row'>
          {placesFormatted}
        </div>
        <div>
          <a href="/places/new"><button className='btn btn-primary'>Create A New Place</button></a>
          <a href="/"></a><button className='btn btn-secondary'>Back to Home Page</button>
        </div>
           
        </main>
    </Default>
)
}


module.exports = index
