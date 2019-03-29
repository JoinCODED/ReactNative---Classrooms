import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import {
  Body,
  Button,
  Input,
  Item,
  Left,
  ListItem,
  Right,
  Separator,
  Text,
  TextInput,
  Thumbnail,
  View
} from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

import * as actionCreators from "../../../Store/actions/classActions";

import styles from "../styles";
import ClassForm from "./ClassForm";

class ClassCreate extends Component {
  state = {
    collapsed: false
  };

  render() {
    return (
      <ListItem>
        <Collapse
          style={{ margin: 10, fontSize: 20 }}
          isCollapsed={this.state.collapsed}
          onToggle={isCollapsed => this.setState({ collapsed: isCollapsed })}
        >
          <CollapseHeader>
            <View>
              <Text>Create a new classroom</Text>
            </View>
          </CollapseHeader>
          <CollapseBody style={{ width: 350 }}>
            <ClassForm
              handleCollapse={() => this.setState({ collapsed: false })}
            />
          </CollapseBody>
        </Collapse>
      </ListItem>
    );
  }
}

mapStateToProps = state => ({
  user: state.authReducer.user
});

mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassCreate);
