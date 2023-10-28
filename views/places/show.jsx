const React = require('react')
const Default = require('../default')

function Show({ place }) {
    return (
        <Default>
            <main>
                <div className='Details-container'>
                    <h2>{place.name}, {place.city}</h2>
                    <img src={place.pic} alt={place.name} />

                    <p>Cuisines: {place.cuisines}</p>
                </div>
                <div className='button-container'>
                    <a href={`/places/${index}/edit`}><button className='btn btn-primary'>Edit</button></a>
                    <form action={`/places/${index}?_method=DELETE`} method='POST'>
                        <button className='btn btn-danger'>Delte</button>
                    </form>
                    <a href='/places'><button className='btn btn-secondary'>Go to Places</button></a>
                </div>
            </main>
        </Default>
    )
}

module.exports = Show