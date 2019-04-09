import React, { Component } from "react";

// Styling
import styles from "../styles";
import { TouchableOpacity } from "react-native";
import { Body, Right, Text } from "native-base";

class CreateButton extends Component {
  render() {
    return (
      <>
        <Body>
          <TouchableOpacity
            onPress={this.props.handleCreate}
            style={styles.createButton}
          >
            <Text style={{ ...styles.createButtonText, marginRight: 20 }}>
              Create
            </Text>
          </TouchableOpacity>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={this.props.handleCreate}
            style={styles.createButton}
          >
            <Text style={styles.createButtonText}>Add Students</Text>
          </TouchableOpacity>
        </Right>
      </>
    );
  }
}

export default CreateButton;
