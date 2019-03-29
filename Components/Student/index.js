import React, { Component } from "react";
import { connect } from "react-redux";
import { CardItem, Text } from "native-base";

class Student extends Component {
  render() {
    const { student } = this.props;
    return (
      <CardItem>
        <Text>
          {student.first_name} {student.last_name}
        </Text>
      </CardItem>
    );
  }
}

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(Student);
