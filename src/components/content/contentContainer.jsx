import React from "react";
import { connect } from "react-redux";
import Content from "./content";
import Sort from "./Sort/sort"
class ContentContainer extends React.Component {
  
    render() {
     
        return (
          <>
            <Sort />
            <Content
            cards={this.props.cards}
            
            />
          </>
        );
      }
}

let mapStateToProps = (state) => {
    // Данные из стейта
    return {
      cards: state.content.cards,
      };
  };

export default connect(mapStateToProps, {})(ContentContainer);
