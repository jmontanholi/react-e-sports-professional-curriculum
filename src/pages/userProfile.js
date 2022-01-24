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
  console.log(users[id-1])
  return (
    <section>
      {users[id - 1] && (
        <div>
          <div>
            <img src="#" alt="profile" />
          </div>
          <div>
            <p>{users[id - 1].name}</p>
            <p>{users[id - 1].description}</p>
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
              users[id - 1].photos
            }
          </div>
        </div>
      )}
    </section>
  )
}

export default UserProfile;
