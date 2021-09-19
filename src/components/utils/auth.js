import axios from 'axios';
import crypto from 'crypto';

const register = async newUser => {
  if (await passwordAPIChecker(newUser.password)) {
    return { message: 'Please use a stronger password' };
  }
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_DEV_API}/api/register`,
      newUser
    );

    return res.data;
  } catch (error) {
    if (!error.response) {
      return { message: 'Service is down' };
    }
    return error.response.data;
  }
};
const login = async userInfo => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_DEV_API}/api/login`,
      userInfo
    );
    return res.data;
  } catch (error) {
    if (!error.response) {
      return { message: 'Service is down' };
    }
    return error.response.data;
  }
};

const passwordAPIChecker = async password => {
  let hashed = crypto
    .createHash('sha1')
    .update(password)
    .digest('hex')
    .toUpperCase();

  let range = hashed.slice(0, 5);
  let suffix = hashed.slice(5);

  let res = await axios.get(`https://api.pwnedpasswords.com/range/${range}`);

  let body = await res.data;

  let regex = new RegExp(`^${suffix}:`, 'm');
  return regex.test(body); // true (pwned), false (not pwned)
};

const verify = async hash => {
  let res = await axios.post(
    `${process.env.REACT_APP_DEV_API}/api/verify/${hash}`
  );
  return res;
};

export { register, login, verify };
