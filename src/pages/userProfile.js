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
  const [videoNum, setVideoNum] = useState(0)
  const users = useSelector((state) => state.gamer.all_users)
  const user = users[id-1] ? users[id-1].user : null
  const videos = user ? user.videos : null
  let profilePic;
  if (user) {
    profilePic = user.photos.filter((e) => e.photo_type === 'profile')
  }
  return (
    <section className={`${style.section}`}>
      <nav className={`${style.nav}`}>
        <a href="www">something</a>
        <a href="www">something</a>
        <a href="www">something</a>
        <a href="www">something</a>
      </nav>
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
                return (
                <img 
                  className={`${style.photo}`} 
                  key={e.id} 
                  src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' 
                  alt={e.photo_type}
                />)
              })
            }
            <img 
              className={`${style.photo}`} 
              src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' 
              alt='something'
            />
             <img 
              className={`${style.photo}`} 
              src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' 
              alt='something'
            />
             <img 
              className={`${style.photo}`} 
              src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' 
              alt='something'
            />
             <img 
              className={`${style.photo}`} 
              src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' 
              alt='something'
            />
             <img 
              className={`${style.photo}`} 
              src='https://res.cloudinary.com/hrwa243my/image/upload/v1638366288/samples/bike.jpg' 
              alt='something'
            />
          </div>
          <div className={`${style.videosDiv}`}>
            <button className={`${style.leftArrow}`} type='button'>{'<'}</button>
            {
              user.videos.filter((e) => e.video_type === select[0].id).length === 0 && (
                <div className={`${style.videoFrame}`}>
                  <p className={`${style.noVideoMessage}`}>This player has no video upload for this category</p>
                </div>
              )
            }
            <iframe
              key={`${videos[videoNum].id}`}
              className={`${style.video}`}
              src='https://res.cloudinary.com/hrwa243my/video/upload/v1638366301/samples/sea-turtle.mp4' 
              title={`video number ${videos[videoNum].id} type: ${videos[videoNum].video_type}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            >
            </iframe>
            <button className={`${style.rightArrow}`} type='button'>{'>'}</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default UserProfile;
