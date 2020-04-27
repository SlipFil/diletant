
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const SET_USER_PROFILE = "SET_USER_PROFILE";
import firstCardBG from '../assets/img/firstCard.png'
import secondCardBG from '../assets/img/secondCard.png'
import thirdCardBG from '../assets/img/thirdCard.png'
import fourthCardBG from '../assets/img/thourthCard.png'
import fifthCardBG from '../assets/img/fifthCard.png'
import sixthCardBG from '../assets/img/sixthCard.png'

let initialState = {
    cards: [
      { id: 1, what: "статьи", 
      when: "новейшее время", 
      where: "европа", 
      name:"Вытрезвитель-кошмар пролетария", 
      discription:"Some discription",
      size: "small",
      imgURL: firstCardBG },
      { id: 2, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Кристина Шведская: королева, промотавшая королевство", 
      discription:"Some discription",
      size: "small",
      imgURL: secondCardBG },
      { id: 3, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Как Ельцин хотел забрать крым", 
      discription:"Some discription",
      size: "big",
      imgURL: thirdCardBG },
      { id: 4, what: "тесты", 
      when: "новое время", 
      where: "азия", 
      name:"Гражданская война в Камбодже", 
      discription:"Some discription",
      size: "small",
      imgURL: fourthCardBG },
      { id: 5, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Машина времени", 
      discription: "В истории немало знаковых,переломных и важных годов. И немало людей, которые с удовольствием отправились бы в прошлое, если бы могли.",
      size: "small",
      imgURL: fifthCardBG },
      { id: 6, what: "егэ", 
      when: "XII век", 
      where: "южная америка", 
      name:"Инки, майя или ацтеки", 
      discription:"Some discription",
      size: "small",
      imgURL: sixthCardBG },
      { id: 7, what: "тесты", 
      when: "новое время", 
      where: "азия", 
      name:"Гражданская война в Камбодже", 
      discription:"Some discription",
      size: "small",
      imgURL: fourthCardBG },
      { id: 8, what: "тесты", 
      when: "новое время", 
      where: "азия", 
      name:"Гражданская война в Камбодже", 
      discription:"Some discription",
      size: "small",
      imgURL: fourthCardBG },
      { id: 9, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Машина времени", 
      discription: "В истории немало знаковых,переломных и важных годов. И немало людей, которые с удовольствием отправились бы в прошлое, если бы могли.",
      size: "small",
      imgURL: fifthCardBG },
      { id: 10, what: "егэ", 
      when: "XII век", 
      where: "южная америка", 
      name:"Инки, майя или ацтеки", 
      discription:"Some discription",
      size: "small",
      imgURL: sixthCardBG },
      { id: 11, what: "тесты", 
      when: "новое время", 
      where: "азия", 
      name:"Гражданская война в Камбодже", 
      discription:"Some discription",
      size: "small",
      imgURL: fourthCardBG }
    ],
    
  }

const contentReducer= (state = initialState, action) => {
    switch (action.type) {
        
        default: 
        return state;
    }
   }

// export const addPostCreator = () => ({ type: ADD_POST });
// export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
// export const updateNewPostText = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });

export default contentReducer;