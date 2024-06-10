import React from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "../actions/CardActions";
import { useEffect } from "react";

const Contact = () => {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users)
  const isUsersLoaded = useSelector((state) => state.isUsersLoaded)

  // for this test app we want to keep any local changes to our users in redux.
  // only re-fetch users if not previously loaded.
  useEffect(() => {
    if (!isUsersLoaded) {
      dispatch(fetchUsers())
    }
  }, [dispatch, isUsersLoaded])

  return (
    <div>
      {
        users.map((card) => {
          return (
            <div
              className='ui raised very padded text container segment'
              style={{marginTop:'80px'}}
              key={card.username}
            >
              <Link to={`/card/${card.username}`} className="ui header">
                {card.name}
              </Link>
              <p>
                {card.email}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Contact
