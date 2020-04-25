
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    cards: [
      { id: 1, what: "статьи", 
      when: "новейшее время", 
      where: "европа", 
      name:"Вытрезвитель-кошмар пролетария", 
      discription:"Some discription",
      size: "small",
      imgURL: "" },
      { id: 2, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Кристина Шведская: королева, промотавшая королевство", 
      discription:"Some discription",
      size: "small",
      imgURL: "" },
      { id: 3, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Как Ельцин хотел забрать крым", 
      discription:"Some discription",
      size: "big",
      imgURL: "" },
      { id: 4, what: "тесты", 
      when: "новое время", 
      where: "азия", 
      name:"Гражданская война в Камбодже", 
      discription:"Some discription",
      size: "small",
      imgURL: "" },
      { id: 5, what: "статьи", 
      when: "средние века", 
      where: "европа", 
      name:"Машина времени", 
      discription: "В истории немало знаковых,переломных и важных годов. И немало людей, которые с удовольствием отправились бы в прошлое, если бы могли.",
      size: "small",
      imgURL: "" },
      { id: 6, what: "егэ", 
      when: "XII век", 
      where: "южная америка", 
      name:"Инки, майя или ацтеки", 
      discription:"Some discription",
      size: "small",
      imgURL: "" },
      
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