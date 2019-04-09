import React, { Component } from "react";

// Styling
import styles from "../styles";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";

class UpdateButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.handleUpdate}
        style={styles.createButton}
      >
        <Text style={styles.createButtonText}>Update Classroom</Text>
      </TouchableOpacity>
    );
  }
}

export default UpdateButton;
