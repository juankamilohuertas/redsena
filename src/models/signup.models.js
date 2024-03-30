export const users = (initials, id, username, password, date) => {
  `INSERT INTO users(id,username,password,date)
    VALUES ('${initials} ${id}','${username}','${password}','${date}')`;
};

export default users;
