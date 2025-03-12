import { Input } from "antd";

const CustomControlledTextArea = ({
  name,
  label,
  className,
  allowClear,
  autoSize,
  bordered,
  defaultValue,
  maxLength,
  showCount,
  value,
  onPressEnter,
  onResize,
  showError,
  error,
  status,
  isRequired,
  placeholder,
  disabled,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`custom-select-box ${(showError && error) || status ? "error-border" : ""}`}>
      {label && (
        <label>
          {isRequired && <span className='required'>* </span>}
          {label}
        </label>
      )}
      <Input.TextArea
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        autoSize={autoSize}
        bordered={bordered}
        defaultValue={defaultValue}
        maxLength={maxLength}
        showCount={showCount}
        onResize={onResize}
        disabled={disabled}
        onBlur={onBlur}
        allowClear={allowClear}
        onPressEnter={onPressEnter}
      />
      {showError && error && <span className='error-text'>{error}</span>}
      {!error && status && <span className='error-text'>{status}</span>}
    </div>
  );
};

export default CustomControlledTextArea;
