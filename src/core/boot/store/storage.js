/**
 * ./src/core/boot/store/secureStore.js
 *
 * @flow
 */
/* eslint-disable arrow-body-style, implicit-arrow-linebreak  */

import { SecureStore } from "expo";

import { config, state } from "../../constants";

type StorageType = {
  setItem: (key: string, value: mixed) => Promise<mixed>,
  removeItem: (key: string) => Promise<mixed>,
  getItem: (key: string) => Promise<mixed>,
  getAllKeys: () => Array<string>,
  removeAll: () => Promise<mixed>
};

type OpsType = {
  replaceCharacter: string
};

/**
 * replace spaces for received 'replaceCharacter'
 *
 * @param  {key}              string    the key text
 * @param  {replaceCharacter} string    the replace character text
 * @return {string}                     formatted key
 */
const replacer = (key: string, replaceCharacter: string): string => {
  return key.replace(/[^a-z0-9.\-_]/gi, replaceCharacter);
};

/**
 * Secure Storage Engine
 *
 * - it macth with redux-persist
 * - its uses Expo's SecureStorage, so:
 *   iOS: values are stored using the keychain services as
 *        kSecClassGenericPassword. iOS has the additional option of being able
 *        to set the value’s kSecAttrAccessible attribute, which controls when
 *        the value is available to be fetched.
 *   Android: values are stored in SharedPreferences, encrypted with Android’s
 *            Keystore system.
 *
 * @param  {Object} options: OpsType  custom options
 * @return {Object}                   storage object API
 */
const createSecureStorage = (options: OpsType): StorageType => {
  const { replaceCharacter } = options;
  const getItem = (key: string): Promise<mixed> => {
    return SecureStore.getItemAsync(replacer(key, replaceCharacter), options);
  };

  const setItem = async (key: string, value: mixed): Promise<mixed> => {
    return SecureStore.setItemAsync(
      replacer(key, replaceCharacter),
      value,
      options
    );
  };

  const removeItem = (key: string): Promise<mixed> => {
    return SecureStore.deleteItemAsync(
      replacer(key, replaceCharacter),
      options
    );
  };

  const getAllKeys = (): Array<string> => {
    return state.getStateKeys();
  };

  const multiRemove = async (keys: Array<string>): Promise<mixed> => {
    const multiRemoveStatus = await Promise.all(
      keys.map(
        (key: string): Promise<mixed> => {
          return SecureStore.deleteItemAsync(
            replacer(key, replaceCharacter),
            options
          );
        }
      )
    );

    return multiRemoveStatus;
  };

  const removeAll = async (): Promise<mixed> => {
    const removed = await multiRemove(getAllKeys());
    return removed;
  };

  return {
    getAllKeys,
    removeItem,
    removeAll,
    getItem,
    setItem
  };
};

const secureStorage = createSecureStorage({
  replaceCharacter: config.storageReplaceCharacter || "_"
});

export default secureStorage;
