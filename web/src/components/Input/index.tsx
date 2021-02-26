import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
  classNameContainer?: string;
  type?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  icon: Icon,
  classNameContainer,
  type,
  id,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFilled, setIsFilled] = useState(false);
  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container
      isFilled={isFilled}
      isError={!!error}
      className={classNameContainer}
      type={type || 'text'}
    >
      {Icon && <Icon size={20} />}
      <input
        type={type || 'text'}
        name={name}
        ref={inputRef}
        id={id || ''}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
      {(type === 'checkbox' || type === 'radio') && (
        <label htmlFor={id}>{placeholder}</label>
      )}
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
