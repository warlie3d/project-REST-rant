const React = require('react')
const Default = require('./default')

function home (html) {
  return (
    <Default>
        <main>
        <h1>RES-RANT</h1>
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cafe" height='500' />
          <div>
          Photo by <a href="https://unsplash.com/@tli427?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tony Lee</a> on <a href="https://unsplash.com/photos/square-brown-wooden-table-8IKf54pc3qk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  
          </div>
        </div>
        <a href="/places"><button className='btn-primary'>Places page</button></a>
        </main>
    </Default>
  )
}


module.exports = home
