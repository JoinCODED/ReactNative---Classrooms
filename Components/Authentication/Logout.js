import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon } from "native-base";

// Stores
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions/authActions";

class Logout extends Component {
  render() {
    return (
      <Button
        transparent
        onPress={() => this.props.logout(this.props.navigation)}
      >
        <Icon
          type="MaterialCommunityIcons"
          name="logout"
          style={{ color: "#F6EDF0" }}
        />
      </Button>
    );
  }
}

mapStateToProps = state => ({});

mapDispatchToProps = dispatch => ({
  logout: navigation => dispatch(actionCreators.logout(navigation))
});
export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)
);
