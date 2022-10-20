import { FormInputLabel, Input, Group } from './form-input.style';

const FormInput = ({ labelName, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* another way to write if statement argumentToCheck && (result). It means that if the argument exist go on and show me the result*/}
      {labelName && <FormInputLabel shrink={otherProps.value.length}>{labelName}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
