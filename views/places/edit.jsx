const React = require('react')
const Default = require('../default')

function Edit({ place, index }) {
    return (
        <Default>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${index}?_method=PUT`} method='POST' >
                    <div className="row m-1">
                        <div className='form-group col-6'>
                            <label htmlFor="name" >Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                defaultValue={place.name}
                            />
                        </div>
                        <div className='form-group col-6'>
                            <label htmlFor="city">City</label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                className="form-control"
                                defaultValue={place.city}
                            />
                        </div>
                    </div>
                    <div className="row m-1">
                    <div className='form-group col-6'>
                            <label htmlFor="state">State</label>
                            <input
                                id="state"
                                name="state"
                                type="text"
                                className="form-control"
                                defaultValue={place.state}
                            />
                        </div>
                        <div className='form-group col-6'>
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                id="cuisines"
                                name="cuisines"
                                type="text"
                                className="form-control"
                                defaultValue={place.cuisines}
                            />
                        </div>
                    </div>
                    <div className='form-group m-1' >
                        <label htmlFor="pic">Image URL</label>
                        <input
                            id="img"
                            name="img"
                            type="text"
                            className="form-control"
                            defaultValue={place.pic}
                        />
                    </div>
                    <input className='btn btn-success' type='submit' value='Update' />
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit