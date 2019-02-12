import React from 'react';
import RoutesArray from './RoutesArray';

export default class LinkList extends React.Component {
  render() {
    const listItems = RoutesArray.map((route) => <li className="listLink"><a key={route.path} href={route.path}>{route.number}</a></li>);

    return (
      <div>
        <ul className="linkList">
          {listItems}
        </ul>
      </div>
    );
  }
}
