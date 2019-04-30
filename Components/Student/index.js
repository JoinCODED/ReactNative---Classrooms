import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Text, Icon, Left, Right, View, ListItem } from "native-base";

import * as studentActionCreators from "../../Store/actions/studentActions";

class Student extends Component {
  render() {
    let student = this.props.students.find(
      student => student.id === this.props.studentID
    );
    console.log("STUDENT ROW", student);
    return (
      <ListItem>
        <Left>
          <Text>
            {student.first_name} {student.last_name}
          </Text>
        </Left>
        <Right>
          <Icon name="edit" type="FontAwesome" />
          <Icon name="trash" />
        </Right>
      </ListItem>
    );
  }
}

mapStateToProps = state => ({
  students: state.studentReducer.students
});

mapDispatchToProps = dispatch => ({
  fetchStudentByID: studentID =>
    dispatch(studentActionCreators.fetchStudentByID(studentID))
});

export default connect(mapStateToProps)(Student);
