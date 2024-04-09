export const signupModels = async (id_user, email, password, date) => {
  return `INSERT INTO users (id_user,email,password,date)
    VALUES ('${id_user}','${email}','${password}','${date}')`;
};

export const signinModels = async () => {
  return `SELECT id_user,email,password FROM users`;
};

export const publicationsModels = async (idPublication, id, title, message,file,color,date) => {
  return `INSERT INTO publications (id_publication, id_user, title, message,file,color,date)
    VALUES ('${idPublication}','${id}','${title}','${message}','${file}','${color}','${date}')`;
};