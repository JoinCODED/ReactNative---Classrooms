import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, Text } from "native-base";

class StudentsPicker extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <Text>Student 1</Text>
        </ListItem>
        <ListItem>
          <Text>Student 2</Text>
        </ListItem>
        <ListItem>
          <Text>Student 3</Text>
        </ListItem>
      </List>
    );
  }
}

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps)(StudentsPicker);
