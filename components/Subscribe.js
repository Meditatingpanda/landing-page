import axios from "axios";

const subscribeHandler = async (email) => {
  let isSuccess = false;
  const res = await axios.post("url", {
    email,
  });

  if (res.status === 200) {
    isSuccess = true;
  }

  return isSuccess;
};

const queryHandler = async ({
  type,
  name,
  email,
  reason,
  phoneNo,
  message,
}) => {
  let isSuccess = false;
  const res = await axios.post("url", {
    type,
    name,
    email,
    reason,
    phoneNo,
    message,
  });
  if (res.status === 200) {
    isSuccess = true;
  }

  return isSuccess;
};

export { subscribeHandler, queryHandler };
