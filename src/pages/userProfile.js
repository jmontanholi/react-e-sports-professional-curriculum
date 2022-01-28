import * as React from 'react' 
import { useEffect, useState } from 'react';
import { Select } from "baseui/select";
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
  const [select, setSelect] = useState([
    { label: "Overwatch", id: "OW" }
  ]);
  console.log(select);
  const users = useSelector((state) => state.gamer.all_users)
  const user = users[id-1] ? users[id-1].user : null
  let profilePic;
  if (user) {
    profilePic = user.photos.filter((e) => e.photo_type === 'profile')
  }
  return (
    <section className={`${style.section}`}>
      {user && (
        <div className={`${style.majorDiv}`}>
          <div className={`${style.infoDiv}`}>
            <div className={`${style.profileImgDiv}`}>
              <img className={`${style.profileImg}`} src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' alt="profile" />
            </div>
            <div className={`${style.descriptionDiv}`}>
              <div className={`${style.nameDiv}`}>
                <p className={`${style.name}`}>{user.name}</p>
                <p className={`${style.description}`}>{user.description}</p>
              </div>
              <Select
                className={`${style.select}`}
                clearable={false}
                options={[
                  { label: "Overwatch", id: "OW" },
                  { label: "League Of Legends", id: "LOL" },
                  { label: "Dota 2", id: "DOTA" },
                  { label: "Counter Strike", id: "CS" },
                  { label: "Valorant", id: "VAL" },
                  { label: "Call Of Duty", id: "COD" }
                ]}
                value={select}
                placeholder="Select color"
                onChange={params => setSelect(params.value)}
              />
            </div>
          </div>
          <div className={`${style.photosDiv}`}>
            {
              user.photos.filter((e) => e.photo_type === select[0].id).map((e) => {
                return (<img className={`${style.photo}`} key={e.id} src={e.link} alt={e.photo_type} />)
              })
            }
          </div>
          <div className={`${style.videosDiv}`}>
            {
              user.videos.filter((e) => e.video_type === select[0].id).map((e) => {
                return (
                <iframe
                  key={`${e.id}`}
                  className={`${style.video}`}
                  width="560" 
                  height="315" 
                  src={e.link} 
                  title={`video number ${e.id} type: ${e.video_type}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                >
                </iframe>
                )
              })
            }
          </div>
        </div>
      )}
    </section>
  )
}

export default UserProfile;
