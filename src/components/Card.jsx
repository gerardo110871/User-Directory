import React from 'react'
import './Card.css'
import data from '../Data'

function Card(props) {
  function alertEm() {
    alert('You have reaced the end')
  }
  return (
    <div className="page--">
        <main className="card--">
            <h1>{props.firstName} {props.lastName}</h1>
            <h3>From: {props.city}, {props.country}</h3>
            <h3>Job Title: {props.title}</h3>
            <h3>Employer: {props.employer}</h3><br></br>

            <h3>Favorite Movies: </h3>
            <ol>
              <li>{props.favMovies[0]}</li>
              <li>{props.favMovies[1]}</li>
              <li>{props.favMovies[2]}</li>
            </ol>

          </main>
          <div className="all--buttons">
            {props.index === 0?  <button className="sort--buttons"> {'<'} Previous</button> : <button onClick={props.prev} className="sort--buttons"> {'<'} Previous</button>}

            {/* <div className="edit--buttons">
              <button className="middle--buttons">Edit</button>
              <button className="middle--buttons">Delete</button>
              <button className="middle--buttons">New</button>
            </div> */}

              {props.index === data.length -1 ? <button className='sort--buttons hide' onClick={alertEm}> Next {'>'} </button> :<button onClick={props.next} className="sort--buttons">Next {'>'}</button>}
            </div>
    </div>
  )
}

export default Card