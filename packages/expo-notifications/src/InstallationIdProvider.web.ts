import UUID from 'uuid-js';

import { InstallationIdProvider } from './InstallationIdProvider';

const INSTALLATION_ID_KEY = '@@expo-notifications.InstallationId@@';

export default {
  getInstallationIdAsync: async () => {
    let installationId = localStorage.getItem(INSTALLATION_ID_KEY);
    if (installationId) {
      return installationId;
    }

    installationId = UUID.create().toString();
    localStorage.setItem(INSTALLATION_ID_KEY, installationId);
    return installationId;
  },
  // mock implementations
  addListener: () => null,
  removeListeners: () => null,
} as InstallationIdProvider;
