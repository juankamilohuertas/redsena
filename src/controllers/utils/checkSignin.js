export const checkSignin = (req, res, next) => {
  const { userName, password } = req.body;
  console.log(userName);
};

export default checkSignin;
