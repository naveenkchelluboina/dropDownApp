import { type StylesConfig } from 'react-select';

export const customStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    color: state.isSelected ? 'inherit' : provided.color,
    ':hover': {
      backgroundColor: '#fff',
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#EBF8FF',
    borderRadius: '6px',
    margin: '2px',
    padding: '0px 2px 0px 6px',
  }),
  multiValueLabel: () => ({
    padding: '0px 6px',
    fontSize: '14px',
    lineHeight: '22px',
    boxShadow: 'none',
  }),
  control: (provided) => ({
    ...provided,
    padding: '5px 0px 5px 2px',
    borderColor: 'hsla(200, 98%, 18%, 1)',
    boxShadow: '0px 0px 0px hsla(200, 98%, 18%, 1)',
    display: 'inline-flex',
    width: '100%',
    minHeight: '32px',
    whiteSpace: 'nowrap',
    ':active': {
      borderColor: 'hsla(200, 98%, 18%, 1)',
      boxShadow: 'inset 0 0 2px hsla(200, 98%, 18%, 1)',
    },
    ':hover': {
      borderColor: 'hsla(200, 98%, 18%, 1)',
    },
  }),
  MenuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    colors: 'black',
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
    borderRadius: '8px',
    zIndex: 2,
    width: 'max-content',
    minWidth: '100%',
    left: state.selectProps.menuAlignment === 'right' ? 'auto' : '0',
    right: state.selectProps.menuAlignment === 'right' ? '0' : 'auto',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    display: 'inline-flex',
    ':hover': {
      color: 'currentColor',
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    maxHeight: '74px',
    padding: '0px',
    overflowY: 'auto',
    marginLeft: '14px',
    ':focus-within': { maxHeight: '74px' },
  }),
  placeholder: (provided) => ({
    ...provided,
    cursor: 'text',
    alignSelf: 'center',
    fontSize: '14px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  }),
};

export default customStyles;