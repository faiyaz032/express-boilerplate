export async function signup(req, res, next) {
  try {
    res.status(200).json({ status: 'success', meesage: 'Reached Signup' });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    res.status(200).json({ status: 'success', meesage: 'Reached Login' });
  } catch (error) {
    next(error);
  }
}
