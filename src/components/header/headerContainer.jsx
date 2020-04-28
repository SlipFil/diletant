import {setSearchBody} from "../../redux/headerReducer"
import { connect } from "react-redux";
import Header from "./header"

 

let mapStateToProps = (state) => { // Данные из стейта
  return {
    searchBody: state.header.searchBody,
   
  }
}



const HeaderContainer = connect(mapStateToProps, {setSearchBody} )(Header)
export default HeaderContainer;

