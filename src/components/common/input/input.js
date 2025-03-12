import { Input } from "antd";
import "./input.module.scss"

const CustomControlledInput = ({
  type,
  size,
  label,
  scroll,
  value,
  onBlur = () => {},
  onPressEnter = () => {},
  onChange,
  name,
  placeholder,
  disabled,
  showError,
  error,
  isRequired = false,
  allowClear,
  prefix,
  className,
  status,
  readOnly,
}) => {
  return (
    <div
      className={`custom-select-box ${className} ${
        (showError && error) || status ? "error-border" : ""
      }`}
    >
      {label && (
        <label>
          {isRequired && <span className="required">* </span>}
          {label}
        </label>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        size={size}
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        onBlur={onBlur}
        allowClear={allowClear}
        prefix={prefix}
        autoComplete={"off"}
        onPressEnter={onPressEnter}
        className={className}
      />
      {showError && error && <span className="error-text">{error}</span>}
      {!error && status && <span className="error-text">{status}</span>}
    </div>
  );
};

export default CustomControlledInput;
