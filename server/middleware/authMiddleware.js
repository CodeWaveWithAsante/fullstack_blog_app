import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    next("Authentication failed");
  }

  // Bearer djhdgfghdjkgdfh

  const token = authHeader?.split(" ")[1];

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.log(error);
    next("Authentication failed");
  }
};

export default authMiddleware;
