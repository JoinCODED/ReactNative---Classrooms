import React, { Component } from "react";
import { connect } from "react-redux";
import CustomMultiPicker from "react-native-multiple-select-list";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

import * as classActionCreators from "../../../Store/actions/classActions";
import * as studentActionCreators from "../../../Store/actions/studentActions";

import {
  Body,
  Card,
  CardItem,
  Content,
  Text,
  Spinner,
  List,
  Button
} from "native-base";
import Student from "../../Student";

const items = [
  {
    name: "Fruits",
    id: 0,
    icon: "home" // local required file
  },
  {
    name: "Gems",
    id: 1,
    icon: {
      uri:
        "https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png"
    }, // web uri
    children: [
      {
        name: "Quartz",
        id: 20
      },
      {
        name: "Zircon",
        id: 21
      },
      {
        name: "Sapphire",
        id: 22
      },
      {
        name: "Topaz",
        id: 23
      }
    ]
  },
  {
    name: "Plants",
    id: 2,
    icon: "filter_vintage", // material icons icon name
    children: [
      {
        name: "Mother In Law's Tongue",
        id: 30
      },
      {
        name: "Yucca",
        id: 31
      },
      {
        name: "Monsteria",
        id: 32
      },
      {
        name: "Palm",
        id: 33
      }
    ]
  }
];

class ClassroomDetail extends Component {
  state = {
    selectedStudents: []
  };

  componentDidMount() {
    this.props.fetchClassroom(this.props.navigation.getParam("classroomID", 1));
    this.props.fetchAllStudents();
  }

  onSelectedItemsChange = selectedStudents => {
    this.setState({ selectedStudents });
  };

  handleEnrollStudent = studentsID => {
    const enrollData = {
      classroom: this.props.classroom.id,
      student: parseInt(studentsID.pop())
    };
    console.log("ENROLL DAATA", enrollData);
    this.props.enrollStudent(enrollData);
  };

  render() {
    const { classroom, students, enrolledStudents } = this.props;
    if (!classroom || !students) {
      return <Spinner />;
    }

    let filteredStudents = enrolledStudents.filter(
      student => student.classroom === classroom.id
    );

    const studentsList = filteredStudents.map(student => (
      <Student key={student.id} studentID={student.student} />
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
        <Button onPress={() => this.props.navigation.navigate("StudentPicker")}>
          <Text>HELLOOO</Text>
        </Button>

        <Card>
          <List>{studentsList}</List>
        </Card>
      </Content>
    );
  }
}

mapStateToProps = state => ({
  classroom: state.classReducer.classroom,
  students: state.studentReducer.students,
  enrolledStudents: state.studentReducer.enrolledStudents
});

mapDispatchToProps = dispatch => ({
  fetchClassroom: classroomID =>
    dispatch(classActionCreators.fetchClassroom(classroomID)),
  fetchAllStudents: () => dispatch(studentActionCreators.fetchAllStudents()),
  enrollStudent: studentData =>
    dispatch(studentActionCreators.enrollStudent(studentData))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomDetail);
