import React, { createContext, useCallback, useContext, useState } from 'react';
import Alert from '../components/Alert';

interface ICreateAlertProps {
  addAlert(data: IMessage): void;
  removeAlert(): void;
}
interface IMessage {
  message: string;
  type?: 'error' | 'confirmation' | 'alert' | 'success';
  primaryButton?(): void;
  secondaryButton?(): void;
  titlePrimaryButton?: string;
  titleSecondaryButton?: string;
}

const AlertContext = createContext<ICreateAlertProps>({} as ICreateAlertProps);

export const AlertMessage: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<IMessage>({} as IMessage);

  const addAlert = useCallback(async (data: IMessage): Promise<void> => {
    setAlert(data);
  }, []);

  const removeAlert = useCallback(() => {
    setAlert({} as IMessage);
  }, []);

  return (
    <AlertContext.Provider value={{ addAlert, removeAlert }}>
      <Alert
        message={alert.message}
        type={alert.type}
        secondaryButton={alert.secondaryButton}
        primaryButton={alert.primaryButton}
        titlePrimaryButton={alert.titlePrimaryButton}
        titleSecondaryButton={alert.titleSecondaryButton}
      >
        {children}
      </Alert>
    </AlertContext.Provider>
  );
};

export function useAlert() {
  const context = useContext(AlertContext);
  return context;
}
