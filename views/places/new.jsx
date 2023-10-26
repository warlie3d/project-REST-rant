const React = require('react')
const Default = require('../default')

function New({ html }) {
    return (
        <Default>

            <main>
                <h1>Create a New Place</h1>
                <form action="#">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type= "text" />
                    </div>
                                        <div>
                        <label htmlFor="name">City</label>
                        <input type= "text"  />
                    </div>
                                        <div>
                        <label htmlFor="name">State</label>
                        <input type= "text"  />
                    </div>
                                        <div>
                        <label htmlFor="name">Cuisines</label>
                        <input type= "text"  />
                    </div>
                                        <div>
                        <label htmlFor="pic">Image URL</label>
                        <input type= "text"  />
                    </div>
                </form>
            </main>
        </Default>
    )
}

module.exports = New