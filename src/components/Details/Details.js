import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { MdKeyboardVoice } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import parse from 'html-react-parser';
import './Details.css';

const Details = () => {
  const { itemFilter } = useSelector((state) => state.scores);

  return (
    <div className="detail">
      <div className="detail-nav">
        <div className="detail-left">
          <NavLink to="/">
            <div className="arrow-container">
              <button className="arrow-left-btn" type="button">
                <SlArrowLeft className="icon-Item arrow-left" />
              </button>
            </div>
          </NavLink>
          <h3>2023</h3>
        </div>
        <h3>Today&#39;S Games</h3>
        <div className="icons">
          <MdKeyboardVoice className="icon-Item" />
          <FiSettings className="icon-Item" />
        </div>
      </div>
      <div className="daily-games">
        <h2>
          Today Game(
          {itemFilter.length}
          )
        </h2>
      </div>
      <div className="filteredItems">
        {
            itemFilter.map((item) => (
              <div className="content" key={item.videos[0].id}>
                <div className="container">
                  <div className="image">
                    { parse(item.videos[0].embed) }
                  </div>
                  <div className="description">
                    <h2><a href={item.competitionUrl}>{item.competition}</a></h2>
                    <h2>{item.title}</h2>
                    <span>{item.date}</span>
                    <p><a href={item.matchviewUrl}>{item.videos[0].title}</a></p>
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
