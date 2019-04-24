/**
 * ./src/core/boot/index.js
 *
 * @flow
 */
/* eslint-disable global-require */

import { PersistGate } from "redux-persist/integration/react";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import * as Expo from "expo";

import configureStore from "./store/configureStore";
import { SplashLoading } from "../components";
import { assets } from "../utils";

import type { CofiguredStoreType, ImageType, ImagesType } from "./store/type";

type PropsType = {
  children: React$Element<*>
};

type StateType = {
  storeRehydrated: boolean,
  storeCreated: boolean,
  assetsLoaded: boolean,
  ...CofiguredStoreType
};

/**
 * Create the Application
 *
 * @see https://local.triviag2i.inidea.io/docs/mobile/manual/app.md
 * @name App
 */
export default class Setup extends Component<PropsType, StateType> {
  constructor(): void {
    super();
    this.state = {
      storeRehydrated: false,
      storeCreated: false,
      assetsLoaded: false,
      persistor: null,
      store: null
    };
  }

  componentDidMount(): void {
    // rehydration callback (after async compatibility and persistStore)
    configureStore((): void => this.setState({ storeRehydrated: true }))
      // creation callback (after async compatibility)
      .then(
        (configured: CofiguredStoreType): void => {
          this.setState({
            persistor: configured.persistor,
            store: configured.store,
            storeCreated: true
          });
        }
      );

    // load assets
    this.loadAssets().then(
      (imagesList: Array<ImageType>): void => {
        setTimeout((): void => {
          assets.setImages(this.normalizeImages(imagesList));
          this.setState({ assetsLoaded: true });
        }, 100);
      }
    );
  }

  async loadAssets(): Promise<Array<ImageType>> {
    await Expo.Font.loadAsync({
      Roboto: require("../../assets/fonts/Roboto.ttf"),
      Roboto_medium: require("../../assets/fonts/Roboto_medium.ttf"),
      Poppins_bold: require("../../assets/fonts/Poppins-Bold.ttf"),
      Poppins_light: require("../../assets/fonts/Poppins-Light.ttf"),
      Poppins_medium: require("../../assets/fonts/Poppins-Medium.ttf"),
      Poppins_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
      Poppins_semibold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    const images = [
      require("../../assets/images/logo.png"),
      require("../../assets/images/icon.png")
    ];

    const cacheImages = images.map(
      (img: string): ImageType => Expo.Asset.fromModule(img)
    );

    return Promise.all(cacheImages);
  }

  normalizeImages(images: Array<ImageType>): ImagesType {
    const imgObj = {};

    images.forEach(
      (img: { name: string }): void => {
        imgObj[img.name] = img;
      }
    );

    return imgObj;
  }

  render(): React$Element<*> {
    const { children } = this.props;
    const {
      assetsLoaded,
      storeCreated,
      storeRehydrated,
      store,
      persistor
    } = this.state;

    if (!assetsLoaded || !storeCreated || !storeRehydrated) {
      return <SplashLoading />;
    }

    if (!store || !persistor) {
      return <View>{children}</View>;
    }

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}
