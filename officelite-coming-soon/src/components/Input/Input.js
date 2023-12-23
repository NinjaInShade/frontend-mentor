import React, { useState } from 'react';
import ErrorIcon from '../../assets/sign-up/icon-cross.svg';
import ChevronIcon from '../../assets/sign-up/icon-arrow-down.svg';
import CheckIcon from '../../assets/sign-up/icon-check.svg';
import './Input.css';

export default function Input({
  type = 'text',
  className,
  placeholder,
  value,
  setValue,
  error,
  dropdownArray = [{ name: 'default', price: 'default' }],
  validateInput,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState(dropdownArray[0]);

  const toggleDropdown = (e) => {
    e.preventDefault();

    setDropdownOpen(!dropdownOpen);
  };

  const selectDropdown = (e, index) => {
    e.preventDefault();

    setDropdownSelected(dropdownArray[index]);

    setDropdownOpen(!dropdownOpen);
  };

  return type === 'text' ? (
    <div className={`input-container ${className} ${error && 'input-error'}`}>
      <input
        className='body-s input'
        placeholder={placeholder}
        value={value.value}
        onChange={(e) => {
          if (validateInput) {
            validateInput(e.target.value);
          } else {
            setValue({ value: e.target.value, error: false });
          }
        }}
      />
      <img src={ErrorIcon} className='error-icon' alt='Error icon' />
    </div>
  ) : (
    <div className={`input-dropdown-container ${className}`}>
      <ul className='input-dropdown-menu' style={dropdownOpen ? {} : { display: 'none' }}>
        {dropdownArray.map((pack, index) => {
          return (
            <li>
              <button onClick={(e) => selectDropdown(e, index)}>
                <p className='body-s input-dropdown-text'>
                  {pack.name}
                  <span>{pack.price}</span>
                </p>
                <img
                  src={CheckIcon}
                  alt='Check icon'
                  style={dropdownArray[index] === dropdownSelected ? {} : { display: 'none' }}
                />
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={(e) => toggleDropdown(e)}>
        <p className='body-s input-dropdown-text'>
          {dropdownSelected.name}
          <span>{dropdownSelected.price}</span>
        </p>
        <img
          src={ChevronIcon}
          alt='Chevron icon'
          className='input-chevron'
          style={dropdownOpen ? { transform: 'rotate(180deg)' } : {}}
        />
      </button>
    </div>
  );
}
