import React from 'react'
import './Header.css'

function Header() {
  return (
    <header class="header-fixed">

		<nav>
            <a href="#">Logo</a>
            <a className='name' href="#">EulerMail</a>
			<a href="#">Business Overview</a>
			<a href="#">Customer Behaviour</a>
			<a href="#">Campaign Result</a>
			<a href="#">Social Media</a>
			<a href="#">Campaign Designer</a>
			<a href="#">Login</a>
		</nav>

</header>
  )
}

export default Header