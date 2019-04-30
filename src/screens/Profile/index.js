/* @flow */
/* eslint-disable */

import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  Picker,
  Button,
  Text,
  View
} from "react-native";
import { DangerZone } from "expo";

import { Title } from "../../core/components";

const { Localization } = DangerZone;

const russianMesssage = { phrase: "Привет мой друг" };

const localization = {
  en_US: {
    phrase: "Hello my friend",
    default: "English language only"
  },
  ...Platform.select({
    ios: { ru_US: russianMesssage },
    android: { ru_RU: russianMesssage }
  })
};

// flow types
type DefaultPropsType = {
  localeStore: ?{}
};
type PropsType = {
  ...DefaultPropsType
};
type StateType = {
  currentLocale: ?string,
  preferredLocales: Array<string>,
  isoCurrencyCodes: Array<string>
};

/**
 * FooterNav component
 */
class LocalizationScreen extends Component<PropsType, StateType> {
  static navigationOptions = {
    title: "Localization"
  };

  constructor(p): void {
    super(p);
    this.state = {
      currentLocale: null,
      preferredLocales: [],
      isoCurrencyCodes: []
    };

    this.localeStore = new Localization.LocaleStore(localization);
  }

  async componentDidMount() {
    const currentLocale = await Localization.getCurrentLocaleAsync();
    this.setState(() => ({ currentLocale }));
  }

  queryPreferredLocales = async () => {
    const preferredLocales = await Localization.getPreferredLocalesAsync();
    const currentLocale = await Localization.getCurrentLocaleAsync();
    this.setState(() => ({ preferredLocales, currentLocale }));
  };

  changeLocale = locale =>
    this.localeStore.setLocale(locale, () => this.setState(() => ({ locale })));

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Title>Guest profile</Title>
          <View style={styles.container}>
            <Text style={{padding: 10}}>This module is under construction, it is expected to manage the copy of the application in a dynamic way usign the locale and downloading the copy from API. It will be stored and persisted in the application by usign a version manager of the state. Login and signup will be created here. </Text>
          
            <Button
              title={"Show preferred locales"}
              onPress={this.queryPreferredLocales}
            >
              <Text style={styles.isoCurrencyCodes}>Query Platform values</Text>
            </Button>
            <View style={styles.centered}>
              <Text style={styles.plainBanner}>Current Locale</Text>
              <Text>{JSON.stringify(this.state.currentLocale, null, 2)}</Text>
            </View>
            <View style={styles.centered}>
              <Text style={styles.plainBanner}>Locales in Preference Order</Text>
              <Text>{JSON.stringify(this.state.preferredLocales, null, 2)}</Text>
            </View>
            <Picker
              style={styles.picker}
              selectedValue={this.state.locale}
              onValueChange={this.changeLocale}
            >
              <Picker.Item label={"🇺🇸 English"} value={"en_US"} />
              <Picker.Item
                label={"🇷🇺 Russian"}
                value={
                  (Platform.OS === "ios" && "ru_US") ||
                  (Platform.OS === "android" && "ru_RU")
                }
              />
            </Picker>
            <Text style={styles.plainBanner}>Localization table</Text>
            <Text>{JSON.stringify(localization, null, 2)}</Text>
            <View style={styles.languageBox}>
              <View style={styles.row}>
                <Text>Exists in Both: </Text>
                <Text>
                  {this.state.currentLocale ? this.localeStore.phrase : ""}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>Default Case Only: </Text>
                <Text>
                  {this.state.currentLocale ? this.localeStore.default : ""}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centered: { alignItems: "center", justifyContent: "center" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  languageBox: {
    padding: 10,
    borderWidth: 1
  },
  isoCurrencyCodes: {
    padding: 10,
    fontSize: 24,
    backgroundColor: "aliceblue",
    borderWidth: 1
  },
  picker: { backgroundColor: "aliceblue", width: "50%", borderWidth: 1 },
  container: {
    paddingVertical: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  plainBanner: { fontSize: 18 },
  centeredText: { textAlign: "center" }
});

// import React, { Component } from "react";
// import { View, Text } from "react-native";

// class Profile extends Component {
//   static navigationOptions = {
//     title: "Perfil"
//   };

//   render() {
//     return (
//       <View
//         style={{
//           flex: 1,
//           width: null,
//           height: null
//         }}
//       >
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//         <View>
//           <Text> Profile </Text>
//         </View>
//       </View>
//     );
//   }
// }

export default LocalizationScreen;
// export default Profile;
