import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../Store/actions/classActions";

// Styling
import styles from "../styles";
import { TextInput, TouchableOpacity } from "react-native";
import { Body, Input, Item, Right, Text } from "native-base";
import CreateButton from "../Buttons/CreateButton";
import UpdateButton from "../Buttons/UpdateButton";

class ClassForm extends Component {
  state = {
    subject: this.props.classroom.subject || "",
    grade: this.props.classroom.grade || "",
    year: this.props.classroom.year || "",
    id: this.props.classroom.id || ""
  };

  handleCreate = async () => {
    await this.props.classroomCreate(this.state);
    this.props.handleCollapse();
  };

  handleUpdate = async () => {
    await this.props.classroomUpdate(this.state);
    this.props.toggleEdit();
  };

  renderButton = () => {
    if (this.props.edit) {
      return <UpdateButton handleUpdate={this.handleUpdate} />;
    } else {
      return <CreateButton handleCreate={this.handleCreate} />;
    }
  };

  render() {
    return (
      <>
        <Item>
          <Input
            placeholder="Subject"
            value={this.state.subject}
            onChangeText={subject => {
              this.setState({ subject });
            }}
          />
        </Item>
        <Item>
          <Input
            placeholder="Grade"
            keyboardType={"numeric"}
            value={this.state.grade}
            onChangeText={grade => this.setState({ grade })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Year"
            value={this.state.year}
            onChangeText={year => this.setState({ year })}
          />
        </Item>
        <Item style={{ borderBottomColor: "transparent" }}>
          {this.renderButton()}
        </Item>
      </>
    );
  }
}

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => ({
  classroomCreate: classroomData =>
    dispatch(actionCreators.classroomCreate(classroomData)),
  classroomUpdate: classroomData =>
    dispatch(actionCreators.classroomUpdate(classroomData))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassForm);

ClassForm.defaultProps = { classroom: {} };
