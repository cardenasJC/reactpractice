// external
import React from 'react';
import { Link } from 'react-router';


class MainLayout extends React.Component {

    render() {
        return (
      <div className="app">
        <header className="primary-header">Header</header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newbie">Newbie</Link></li>
            <li><Link to="/elementary">Elementary</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
    }

}

export default MainLayout;
