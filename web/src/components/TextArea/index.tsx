import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from 'unform';
import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
  classNameContainer?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  icon: Icon,
  children,
  classNameContainer,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { registerField, error, defaultValue, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFilled, setIsFilled] = useState(false);
  const handleBlurTextArea = useCallback(() => {
    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  return (
    <Container
      isError={!!error}
      isFilled={isFilled}
      className={classNameContainer}
    >
      {Icon && <Icon size={20} />}
      <textarea
        ref={textAreaRef}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        onBlur={handleBlurTextArea}
        {...props}
      >
        {children}
      </textarea>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default TextArea;
