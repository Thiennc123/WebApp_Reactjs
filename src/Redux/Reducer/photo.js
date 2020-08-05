import {ADD_PHOTO} from "../actionTypes";

const initialState = JSON.parse(localStorage.getItem('photos'));

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PHOTO: {
      console.log(action);
      var photo = {
        id: action.photo.id,
        title: action.photo.title,
        discrit: action.photo.discript,
        status: action.photo.status,
        link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
      }

      console.log(photo);

      state.push(photo);
      localStorage.setItem('photos', JSON.stringify(state));
      return[...state];
       
    }
    
    default:
      return state;
      }
  }
