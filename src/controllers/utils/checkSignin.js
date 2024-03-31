export const checkSignin = async (req, res, next) => {
  try {
    const { documentId, password } = req.body;
    const loginDetails = { documentId, password };
    req.loginDetails = loginDetails;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default checkSignin;
