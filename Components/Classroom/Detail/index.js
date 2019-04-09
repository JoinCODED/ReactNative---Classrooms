import React, { Component } from "react";
import { connect } from "react-redux";
import CustomMultiPicker from "react-native-multiple-select-list";

import * as classActionCreators from "../../../Store/actions/classActions";
import * as studentActionCreators from "../../../Store/actions/studentActions";

import { Body, Card, CardItem, Content, Text, Spinner } from "native-base";
import Student from "../../Student";

const userList = {
  "123": "Tom",
  "124": "Michael",
  "125": "Christin"
};

class ClassroomDetail extends Component {
  componentDidMount() {
    this.props.fetchClassroom(this.props.navigation.getParam("classroomID", 1));
    this.props.fetchAllStudents();
  }

  render() {
    const { classroom } = this.props;
    if (!classroom) {
      return <Spinner />;
    }
    // const students = classroom.students.map(student => (
    //   <Student key={student.id} student={student} />
    // ));
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
        <CustomMultiPicker
          options={userList}
          search={true} // should show search bar?
          multiple={true} //
          placeholder={"Search"}
          placeholderTextColor={"#757575"}
          returnValue={"label"} // label or value
          callback={res => {
            console.log(res);
          }} // callback, array of selected items
          rowBackgroundColor={"#eee"}
          rowHeight={45}
          iconColor={"#00a2dd"}
          iconSize={30}
          selectedIconName={"ios-checkmark-circle-outline"}
          unselectedIconName={"md-radio-button-off"}
          scrollViewHeight={130}
          selected={[1, 2]} // list of options which are selected by default
        />
        {/* <Card>{students}</Card> */}
      </Content>
    );
  }
}

mapStateToProps = state => ({
  classroom: state.classReducer.classroom
});

mapDispatchToProps = dispatch => ({
  fetchClassroom: classroomID =>
    dispatch(classActionCreators.fetchClassroom(classroomID)),
  fetchAllStudents: () => dispatch(studentActionCreators.fetchAllStudents())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomDetail);
