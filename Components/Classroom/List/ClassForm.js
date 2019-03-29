import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../Store/actions/classActions";

// Styling
import styles from "../styles";
import { TouchableOpacity } from "react-native";
import { Body, Input, Item, Right, Text } from "native-base";

class ClassForm extends Component {
  state = {
    subject: this.props.classroom.subject || "",
    grade: this.props.classroom.grade || 0,
    year: this.props.classroom.year || "",
    id: this.props.classroom.id || ""
  };

  renderButton = () => {
    if (this.props.edit) {
      return (
        <TouchableOpacity
          onPress={this.handleUpdate}
          style={styles.createButton}
        >
          <Text style={styles.createButtonText}>Update Classroom</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <>
          <Body>
            <TouchableOpacity
              onPress={this.handleCreate}
              style={styles.createButton}
            >
              <Text style={{ ...styles.createButtonText, marginRight: 20 }}>
                Create
              </Text>
            </TouchableOpacity>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={this.handleCreate}
              style={styles.createButton}
            >
              <Text style={styles.createButtonText}>Add Students</Text>
            </TouchableOpacity>
          </Right>
        </>
      );
    }
  };

  handleCreate = async () => {
    let classroom = this.state;
    delete classroom.edit;
    await this.props.classroomCreate(this.state);
    this.props.handleCollapse();
  };

  handleUpdate = async () => {
    let classroom = this.state;
    delete classroom.edit;
    await this.props.classroomUpdate(this.state);
    this.props.toggleEdit();
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
