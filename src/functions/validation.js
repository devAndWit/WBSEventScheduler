export const Validation = {
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = emailRegex.test(email);
    console.log("email valid:", result);
    return result;
  },

  validateRequired(value) {
    const result = typeof value === "string" && value.trim().length > 0;
    console.log("required valid:", result);
    return result;
  },

  validatePassword(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const result = passwordRegex.test(password);
    console.log("password valid:", result);
    return result;
  },

  validatePasswordConfirm(password, passwordConfirm) {
    const result = password === passwordConfirm;
    console.log("password confirm valid:", result);
    return result;
  },
};
