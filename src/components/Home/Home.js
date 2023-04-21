import React, { useEffect } from 'react';
import { PuffLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
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
    <div className="loader-container">
      <PuffLoader className="loader" />
    </div>
  ) : (
    <>
      <div>
        {}
      </div>
      <div className="games">
        {scoreItems.map((item) => (
          <div className="game" key={item.videos[0].id}>
            <div className="arrow-right">
              <button className="arrow-btn" type="button">
                <BsArrowRightCircle className="arrow" />
              </button>
            </div>
            <p>{item.competition}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
