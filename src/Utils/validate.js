export const checkValidData = (email, password, name) => {
  const isEmailValidate =
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
  const isPasswordValidate =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,12}$/.test(password);
  // const isNameValidate = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name);
  // if (!isNameValidate) return "Name is invalid!";
  if (!isEmailValidate) return "Email Id is not valid";
  if (!isPasswordValidate) return "Password is Not valid";
  return null;
};
