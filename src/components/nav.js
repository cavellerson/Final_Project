import React, {Component} from 'react'

class Nav extends Component {
    render = () => {
        return (
            <ul className="nav justify-content-center">

              <li className="nav-item">
                <a className="nav-link" href="https://github.com/cavellerson/Final_Project">Github</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/cavellw/">LinkedIn</a>
              </li>

            </ul>
        )
    }
}

export default Nav
