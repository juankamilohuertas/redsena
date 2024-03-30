export const signupModels = async (id, email, password, date) => {
  return `INSERT INTO users (id,email,password,date)
    VALUES ('${id}','${email}','${password}','${date}')`;
};

export const signinModels = async () => {
  return `SELECT FROM users WHERE `;
};
