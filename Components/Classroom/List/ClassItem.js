import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";

import {
  Body,
  Button,
  Icon,
  Left,
  ListItem,
  Right,
  SwipeRow,
  Text,
  View
} from "native-base";

import * as actionCreators from "../../../Store/actions/classActions";

class ClassItem extends Component {
  render() {
    const { classroom } = this.props;
    return (
      <SwipeRow
        leftOpenValue={75}
        rightOpenValue={-75}
        left={
          <Button
            style={{ backgroundColor: "#A47B88" }}
            onPress={() => alert("Add")}
          >
            <Icon active name="edit" type="FontAwesome" />
          </Button>
        }
        body={
          <Body style={{ margin: 10 }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ClassroomDetail", {
                  classroomID: classroom.id
                })
              }
            >
              <Text>
                {classroom.subject} - {classroom.year}
              </Text>
              <Text note numberOfLines={1}>
                Grade {classroom.grade}
              </Text>
            </TouchableOpacity>
          </Body>
        }
        right={
          <Button
            style={{ backgroundColor: "#FBE214" }}
            onPress={() => this.props.deleteClassroom(classroom)}
          >
            <Icon active name="trash" />
          </Button>
        }
      />
    );
  }
}

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => ({
  updateClassroom: classroom =>
    dispatch(actionCreators.classroomUpdate(classroom)),
  deleteClassroom: classroom =>
    dispatch(actionCreators.classroomDelete(classroom))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassItem);
