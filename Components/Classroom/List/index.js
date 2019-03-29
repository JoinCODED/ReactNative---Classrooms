import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Content, List, Text, Spinner } from "native-base";

import * as actionCreators from "../../../Store/actions/classActions";
import ClassItem from "./ClassItem";
import ClassCreate from "./ClassCreate";

class ClassroomList extends Component {
  static navigationOptions = {
    title: "Classrooms List"
  };

  componentDidMount() {
    this.props.fetchAllClassrooms();
  }

  render() {
    const { loading, classrooms } = this.props.classReducer;
    const { user } = this.props;
    let filteredClassrooms = [];
    if (loading) {
      return <Spinner color="black" />;
    }
    if (this.props.user) {
      filteredClassrooms = classrooms.filter(
        classroom => classroom.teacher === user.user_id
      );
    }
    const classroomItems = filteredClassrooms.map(classroom => (
      <ClassItem
        key={classroom.id}
        classroom={classroom}
        navigation={this.props.navigation}
        deleteClassroom={this.props.deleteClassroom}
      />
    ));
    return (
      <Container>
        <Content>
          <List>
            <ClassCreate />
            {classroomItems}
          </List>
        </Content>
      </Container>
    );
  }
}

mapStateToProps = state => ({
  user: state.authReducer.user,
  classReducer: state.classReducer
});

mapDispatchToProps = dispatch => ({
  fetchAllClassrooms: () => dispatch(actionCreators.fetchAllClassrooms()),
  deleteClassroom: classroom =>
    dispatch(actionCreators.classroomDelete(classroom))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomList);
