import React, { Component } from 'react';
import NoteService from './NoteService';
import "./notes.css"

export default class AddToNote extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div className="notes">
        <form>
          <textarea name="addtonote" id="" cols="60" rows="3"></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    )
  }

}