import React, { useEffect, useState } from 'react';
import dispatchGetAllUsers from '../store/api_slices/get_user_api';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from '../assets/stylesheets/userProfile.module.scss'

const UserProfile = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchGetAllUsers(dispatch);
  }, [dispatch])
  const [select, setSelect] = useState('OW');
  const changeSelect = (e) => {
    setSelect(e.target.value);
  };
  const users = useSelector((state) => state.gamer.all_users)
  const user = users[id-1] ? users[id-1].user : null
  return (
    <section className={`${style.section}`}>
      {user && (
        <div>
          <div>
            <img src="#" alt="profile" />
          </div>
          <div>
            <p>{user.name}</p>
            <p>{user.description}</p>
            <select name="gamesMenu" id="gamesMenu" onChange={(e) => { changeSelect(e); }}>
              <option value="OW">Overwatch</option>
              <option value="LOL">League Of Legends</option>
              <option value="DOTA">Dota 2</option>
              <option value="CS">Counter Strike</option>
              <option value="VAL">Valorant</option>
              <option value="COD">Call Of Duty</option>
            </select>
          </div>
          <div>
            {
              user.photos.map((e) => {
                if (e.photo_type === select) {
                  return (<img key={e.id} src={e.link} alt={e.photo_type} />)
                } else {
                  return null;
                }
              })
            }
          </div>
          <div>
            {
              user.videos.map((e) => {
                if (e.video_type === select) {
                  return (<img key={e.id} src={e.link} alt={e.video_type} />)
                } else {
                  return null;
                }
              })
            }
          </div>
        </div>
      )}
    </section>
  )
}

export default UserProfile;
