const React = require('react')
const Default = require('./default')

function home (html) {
  return (
    <Default>
        <main>
        <h1>HOME</h1>
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1625477811233-044633d10dd1?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lechon pork belly" height='500' />
          <div>
            Photo by <a href="https://unsplash.com/@mandimelanie?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Amanda Lim</a> on <a href="https://unsplash.com/photos/cooked-food-on-green-plate-ENsAKjY3YOs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
          </div>
        </div>
        
        </main>
    </Default>
  )
}


module.exports = home
