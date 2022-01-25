import React, { useEffect } from 'react';
import dispatchGetAllUsers from '../store/api_slices/get_user_api';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchGetAllUsers(dispatch);
  }, [dispatch])
  const users = useSelector((state) => state.gamer.all_users)
  const user = users[id-1] ? users[id-1].user : null
  return (
    <section>
      {user && (
        <div>
          <div>
            <img src="#" alt="profile" />
          </div>
          <div>
            <p>{user.name}</p>
            <p>{user.description}</p>
            <select name="gamesMenu" id="gamesMenu">
              <option value="OW">Overwatch</option>
              <option value="LOL">League Of Legends</option>
              <option value="DOTA">Dota 2</option>
              <option value="CS">Counter Strike</option>
              <option value="VAL">Valorant</option>
            </select>
          </div>
          <div>
            {
              user.photos.map((e) => (
                <img src={e.link} alt={e.photo_type} />
              ))
            }
          </div>
          <div>
            {
              user.videos.map((e) => (
                <img src={e.link} alt={e.video_type} />
              ))
            }
          </div>
        </div>
      )}
    </section>
  )
}

export default UserProfile;
