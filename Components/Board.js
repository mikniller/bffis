import React from 'react';
import members from '../Source/members.js'
import NameAndData from './NameAndData.js'

export default class Board extends React.Component  {
  render() {
    console.log(members);
    return (
      <div>
        <NameAndData members = {members} />
      </div>
    )
  }
}
