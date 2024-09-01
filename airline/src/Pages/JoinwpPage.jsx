import { useLocation } from 'react-router-dom';
import '../css/joinwp.css';

const JoinwpPage = () => {
  const location = useLocation();
  const userId = location.state?.userId;

  return (
    <div className="joinwp-page">
      <div className="card">
        <h1>Congratulations!</h1>
        <p>You are now a part of our WingPoints program.</p>
        {userId && (
          <div className="black-box">
            <p>Your user ID is: <strong>{userId}</strong></p>
            <p>Use this ID to log in to our website and enjoy exclusive benefits!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinwpPage;
