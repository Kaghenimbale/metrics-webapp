import React, { useEffect } from 'react';
import { PuffLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { fetchScores, filterScores } from '../../Redux/Slice/scoreSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { scoreItems, isFetched, isLoading } = useSelector(
    (state) => state.scores,
  );

  const result = [];
  const objCount = {};

  scoreItems.forEach((element) => {
    const duplicate = result.find((e) => e.competition === element.competition);
    if (!duplicate) result.push(element);
    objCount[element.competition] = (objCount[element.competition] || 0) + 1;
  });

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchScores());
    }
  }, [dispatch, isFetched]);

  const handleScores = (id) => {
    dispatch(filterScores(id));
  };

  return isLoading ? (
    <div className="loader-container">
      <PuffLoader className="loader" />
    </div>
  ) : (
    <>
      <div className="stats">
        <h2>Current Stats</h2>
        <h3>Top World championship</h3>
        <p>{result.length}</p>
      </div>
      <div className="games">
        {result.map((item) => (
          <NavLink className="game" to="details" key={item.videos[0].id}>
            <button className="arrow-btn" type="button" onClick={() => handleScores(item.competition)}>
              <BsArrowRightCircle className="arrow" />
              <div>
                <div className="images">
                  <img src={item.thumbnail} alt="gameImg" />
                </div>

                <div className="description">
                  <h2><a href={item.competitionUrl}>{item.competition}</a></h2>
                  <div className="statsGame">
                    {Object.entries(objCount).map(([key, value]) => (
                      key === item.competition && (
                      <h2 key={key}>
                        Chamionship Game(
                        {value}
                        )
                      </h2>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Home;
