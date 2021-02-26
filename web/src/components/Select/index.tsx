import { useField } from '@unform/core';
import React, {
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';
import { Container, Error } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ComponentType<IconBaseProps>;
  name: string;
  data: SelectDataItem[];
  classNameContainer?: string;
}

interface SelectDataItem {
  value: string | number;
  description: string | number;
}

const Select: React.FC<SelectProps> = ({
  name,
  icon: Icon,
  data,
  classNameContainer,
  ...props
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [isFilled, setIsFilled] = useState(false);
  const handleSelectBlur = useCallback(() => {
    setIsFilled(!!selectRef.current?.value);
  }, []);

  return (
    <Container
      isError={!!error}
      isFilled={isFilled}
      className={classNameContainer}
    >
      {Icon && <Icon size={20} />}
      <select
        name={name}
        onBlur={handleSelectBlur}
        defaultValue={defaultValue}
        ref={selectRef}
        {...props}
      >
        {data.map(({ value, description }) => (
          <option key={value} value={value}>
            {description}
          </option>
        ))}
      </select>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
