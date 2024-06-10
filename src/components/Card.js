import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard } from "../actions/CardActions";

const Card = () =>  {

    const { user } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const card = useSelector((state) => state.users.find(card => card.username === user))

    const onButtonClick = () => {
        let id = card.username;
        dispatch(deleteCard(id))
        navigate('/contact')
    }
   
    return(
        <div
            className='ui raised very padded text container segment'
            style={{marginTop:'80px'}}
        >
            <h3 className='ui header'>{ card.name }</h3>
            <p>{ card.email }</p>
            <button className="ui primary right floated button" onClick={onButtonClick}>DELETE</button>
        </div>
    )
 
}

export default Card;