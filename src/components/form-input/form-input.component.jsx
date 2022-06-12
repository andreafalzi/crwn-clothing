import './form-input.style.scss';

const FormInput = ({ labelName, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {/* another way to write if statement argumentToCheck && (result). It means that if the argument exist go on and show me the result*/}
      {labelName && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{labelName}</label>}
    </div>
  );
};

export default FormInput;
