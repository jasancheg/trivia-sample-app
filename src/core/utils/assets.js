/**
 * ./src/core/utils/images.js
 *
 * @flow
 */

import type { ImagesType, ImageType } from "../boot/store/type";

type ImagesListType = {
  logo: ?ImageType,
  icon: ?ImageType
};

type InstanceType = {
  images: ImagesListType,
  +setImages: ImagesType => void,
  +getImages: () => ImagesListType
};

class AppAssets {
  static imgInstance = null;

  images = {
    logo: null,
    icon: null
  };

  /**
   * @returns {AppAssets}
   */

  static getInstance(): InstanceType {
    if (AppAssets.imgInstance == null) {
      AppAssets.imgInstance = new AppAssets();
    }

    // $FlowFixMe
    return this.imgInstance;
  }

  getImages(): ImagesListType {
    return this.images;
  }

  setImages(imagesList: ImagesType): void {
    this.images = imagesList;
  }
}

export default AppAssets.getInstance();
