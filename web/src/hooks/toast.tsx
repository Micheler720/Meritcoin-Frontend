import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info' | 'error';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(messages: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}
const ToasContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastMessage: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessages(state => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToasContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToasContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToasContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}
