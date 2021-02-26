import React, { useCallback } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { BiWindowClose } from 'react-icons/bi';
import { GiConfirmed } from 'react-icons/gi';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { Container, Content, BackgroundTransparent } from './styles';
import Button from '../Button';
import { useAlert } from '../../hooks/alert';

interface AlertsProps {
  message: string;
  type?: 'error' | 'confirmation' | 'alert' | 'success';
  primaryButton?(): void;
  secondaryButton?(): void;
  titlePrimaryButton?: string | 'OK';
  titleSecondaryButton?: string | 'Cancelar';
}
const alertIcon = {
  alert: <FiAlertTriangle size={65} color="#ffff00" />,
  error: <BiWindowClose size={65} color="#c53030" />,
  confirmation: <BsQuestionCircleFill size={65} color="#0A02AD" />,
  success: <GiConfirmed size={65} color="#008000" />,
};

const Alert: React.FC<AlertsProps> = ({
  message,
  type,
  primaryButton,
  secondaryButton,
  titlePrimaryButton,
  titleSecondaryButton,
  children,
}) => {
  const { removeAlert } = useAlert();

  const handlePrimaryButton = useCallback(() => {
    if (primaryButton) {
      primaryButton();
    }
    removeAlert();
  }, [primaryButton, removeAlert]);

  const handleSecondaryButton = useCallback(() => {
    if (secondaryButton) {
      secondaryButton();
    }
    removeAlert();
  }, [secondaryButton, removeAlert]);

  if (message === undefined) {
    return <>{children}</>;
  }
  return (
    <>
      <BackgroundTransparent />
      <Container>
        <Content>
          {type ? alertIcon[type] : alertIcon.alert}
          <span>{message}</span>
          <footer>
            <Button
              buttonType="success"
              type="button"
              onClick={handlePrimaryButton}
            >
              {titlePrimaryButton}
            </Button>
            {secondaryButton && (
              <Button
                buttonType="error"
                type="button"
                onClick={handleSecondaryButton}
              >
                {titleSecondaryButton}
              </Button>
            )}
          </footer>
        </Content>
      </Container>
      {children}
    </>
  );
};

export default Alert;
