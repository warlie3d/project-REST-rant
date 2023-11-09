const React = require('react')
const Def = require('./default')

function error404 (e) {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img src="/images/404 kitty.jpg" alt="Kitten image" />
        <p>{e._message}</p>
        </main>
    </Def>
  )
}

module.exports = error404
