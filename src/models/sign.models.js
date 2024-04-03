export const signupModels = async (id, email, password, date) => {
  return `INSERT INTO users (id,email,password,date)
    VALUES ('${id}','${email}','${password}','${date}')`;
};

export const signinModels = async () => {
  return `SELECT id,email,password FROM users`;
};

export const publicationsModels = async (idPublication, id, title, message,file,color,date) => {
  return `INSERT INTO publications (idPublication, id, title, message,file,color,date)
    VALUES ('${idPublication}','${id}','${title}','${message}','${file}','${color}','${date}')`;
};