import React from 'react';

import { AuthProvider } from './auth';
import { ToastMessage } from './toast';
import { AlertMessage } from './alert';
import { MenuVisible } from './menu';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <MenuVisible>
        <AlertMessage>
          <ToastMessage>{children}</ToastMessage>
        </AlertMessage>
      </MenuVisible>
    </AuthProvider>
  );
};

export default AppProvider;
