import Select from "react-select";
import "./dropdown.module.scss";

const style = {
  control: (base) => ({
    ...base,
    // This line disable the blue border
    boxShadow: "none",
    cursor: "pointer",
  }),
  menu: (provided) => ({ ...provided, zIndex: 3 }),
  container: (base) => ({
    ...base,
    flex: 1,
  }),
};

const CustomDropdown = ({
  className,
  isDisabled,
  label,
  isRequired,
  isLoading,
  isClearable,
  isSearchable,
  options,
  placeholder,
  defaultValue,
  isMulti,
  name,
  onChange,
  showError,
  error,
  value,
  getOptionLabel,
  getOptionValue,
  onBlur,
  onMenuOpen,
  closeMenuOnSelect,
  menuPlacement,
  menuPortalTarget,
}) => {
  return (
    <>
      <div
        className={`custom-dropdown custom-select-box ${
          showError && error ? "error-border" : ""
        }`}
      >
        {label && (
          <span>
            {label}
            {isRequired && <span className="required">*</span>}
          </span>
        )}
        <Select
          className={className}
          isDisabled={isDisabled}
          isLoading={isLoading}
          value={value}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          placeholder={placeholder}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isMulti={isMulti}
          options={options}
          defaultValue={defaultValue}
          closeMenuOnSelect={closeMenuOnSelect}
          name={name}
          menuPlacement={menuPlacement}
          menuPortalTarget={menuPortalTarget}
          onMenuOpen={onMenuOpen}
          onChange={onChange}
          onBlur={onBlur}
          styles={style}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#f2f4f8",
              primary: "#105E9F",
            },
          })}
        />
        {showError && error && <span className="error-text">{error}</span>}
      </div>
    </>
  );
};

export default CustomDropdown;
