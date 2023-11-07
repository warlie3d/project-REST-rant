const React = require('react')
const Default = require('../default')

function show({ place, index }) {
    return (
        <Default>
            <main>
                <div className='card mb-3'>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={place.pic} className="card-img" alt={place.name} height='500' />
                    {/*     <div>
                                Photo by <a href={place.authorLink}>{place.picAuthor}</a> on <a href="https.//unsplash.com">unsplash</a>
                    </div> */}
                </div>
                <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{place.name}</h1>
                                <h3 className="card-title">Rating</h3>
                                <p className="card-text">Not Rated</p>
                                <h3 className="card-title">Description</h3>
                                <h4 className="card-text">{place.showEstablished()}</h4>
                                <h5 className="card-text">Serving {place.cuisines}</h5>
                                {/* p className="card-text">Located in {place.city}, {place.state} serving {place.cuisines}.</p> */}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='comments-container'>
                    <h3>Comments</h3>
                    <p>No Comments yet</p>
                </div>
                <div className='button-container'>
                    <a href={`/places/${index}/edit`}><button className='btn btn-warning'>Edit</button></a>
                    <form action={`/places/${index}?_method=DELETE`} method='POST' >
                        <input className='btn btn-danger' type='submit' value='DELETE' />
                        
                    </form>
                        <a href='/places'><button className='btn btn-secondary'> Go To Places</button></a>
                </div>
            </main>
        </Default>
    )
}

module.exports = show