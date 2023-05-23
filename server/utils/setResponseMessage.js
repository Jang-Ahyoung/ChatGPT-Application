export const setResponseMessage = (res, status, message) => {
  return res.status(status).json({ message });
};
