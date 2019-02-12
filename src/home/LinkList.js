import React from 'react';
import RoutesArray from './RoutesArray';

export default class LinkList extends React.Component {
  render() {
    const listItems = RoutesArray.map((route) => <li><a key={route.path} href={route.path}>{route.number}</a></li>);

    return (
      <div className="linkList">
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
