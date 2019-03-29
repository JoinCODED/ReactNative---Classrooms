import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../Store/actions/classActions";
import { Body, Card, CardItem, Content, Text, Spinner } from "native-base";
import Student from "../../Student";

class ClassroomDetail extends Component {
  componentDidMount() {
    this.props.fetchClassroom(this.props.navigation.getParam("classroomID"));
  }

  render() {
    const { classroom } = this.props;
    if (!classroom) {
      return <Spinner />;
    }
    const students = classroom.students.map(student => (
      <Student key={student.id} student={student} />
    ));
    return (
      <Content padder>
        <Card transparent>
          <CardItem>
            <Body>
              <Text>
                {classroom.subject} - {classroom.year}
              </Text>
              <Text>Grade {classroom.grade}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Text>Students</Text>
          </CardItem>
        </Card>
        <Card>{students}</Card>
      </Content>
    );
  }
}

mapStateToProps = state => ({
  classroom: state.classReducer.classroom
});

mapDispatchToProps = dispatch => ({
  fetchClassroom: classroomID =>
    dispatch(actionCreators.fetchClassroom(classroomID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomDetail);
