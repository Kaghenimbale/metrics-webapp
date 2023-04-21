import React, { useEffect } from 'react';
import { PuffLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { fetchScores } from '../../Redux/Slice/scoreSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { scoreItems, isFetched, isLoading } = useSelector(
    (state) => state.scores,
  );

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchScores());
    }
  }, [dispatch, isFetched]);

  return isLoading ? (
    <div className="loader">
      <PuffLoader />
    </div>
  ) : (
    <div className="games">
      {scoreItems.map((item) => (
        <div className="game" key={item.videos[0].id}>
          <h3>{item.title}</h3>
          <div className="imageScore">
            <img src={item.thumbnail} alt="imageScore" />
          </div>
          <p>{item.competition}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
