/**
 * ./src/core/utils/getComposedStyles.js
 *
 * @flow
 */

import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FoundationIcon from "react-native-vector-icons/Foundation";
import OcticonIcon from "react-native-vector-icons/Octicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FAIcon from "react-native-vector-icons/FontAwesome";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import ZocialIcon from "react-native-vector-icons/Zocial";
import Ionicon from "react-native-vector-icons/Ionicons";

const customIcons = {};

export const registerCustomIconType = (id: string, customIcon: {}): void => {
  customIcons[id] = customIcon;
};

export default (type: string): {} => {
  switch (type) {
    case "material-community":
      return MaterialCommunityIcon;
    case "simple-line-icon":
      return SimpleLineIcon;
    case "foundation":
      return FoundationIcon;
    case "font-awesome":
      return FAIcon;
    case "material":
      return MaterialIcon;
    case "octicon":
      return OcticonIcon;
    case "zocial":
      return ZocialIcon;
    case "evilicon":
      return EvilIcon;
    case "ionicon":
      return Ionicon;
    case "entypo":
      return EntypoIcon;
    case "feather":
      return FeatherIcon;
    default:
      if (customIcons[type]) return customIcons[type];
      return MaterialIcon;
  }
};
