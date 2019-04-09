import React, { Component } from "react";

import { ImageBackground, Text, View } from "react-native";
import { Button } from "native-base";

import styles from "./styles";

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX27737957.jpg"
        }}
        style={styles.container}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.topStyling}>
            {/* <Button
              transparent
              light
              style={styles.buttonStyling}
              onPress={() => alert("IceCream List")}
            >
              <Text style={styles.buttonTextStyling}>FLAVORS LIST</Text>
            </Button> */}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;
