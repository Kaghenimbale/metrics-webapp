import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import './Details.css';

const Details = () => {
  const { itemFilter } = useSelector((state) => state.scores);
  return (
    <div>
      <NavLink to="/">
        <div>
          <button className="arrow-left-btn" type="button">
            <BsArrowLeftCircle className="arrow-left" />
          </button>
        </div>
      </NavLink>
      <div className="filteredItems">
        {
            itemFilter.map((item) => (
              <div key={item.videos[0].id}>
                <div className="container">
                  <div className="image">
                    <img src={item.thumbnail} alt="competition" />
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                    <span>{item.date}</span>
                    <p><a href={item.matchviewUrl}>{item.videos[0].title}</a></p>
                    <p><a href={item.competitionUrl}>{item.competition}</a></p>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Details;
