import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../Store/actions/classActions";

// Styling
import styles from "../styles";
import { TouchableOpacity } from "react-native";
import { Body, Input, Item, Right, Text } from "native-base";

class ClassForm extends Component {
  state = {
    subject: "",
    grade: "",
    year: ""
  };

  handlePress = async () => {
    let classroom = this.state;
    delete classroom.edit;
    await this.props.classroomCreate(classroom);
    this.props.handleCollapse();
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
          <Body>
            <TouchableOpacity
              onPress={this.handlePress}
              style={styles.createButton}
            >
              <Text style={{ ...styles.createButtonText, marginRight: 20 }}>
                Create
              </Text>
            </TouchableOpacity>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={this.handlePress}
              style={styles.createButton}
            >
              <Text style={styles.createButtonText}>Add Students</Text>
            </TouchableOpacity>
          </Right>
        </Item>
      </>
    );
  }
}

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => ({
  classroomCreate: userData =>
    dispatch(actionCreators.classroomCreate(userData))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassForm);
