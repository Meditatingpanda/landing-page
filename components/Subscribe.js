import axios from "axios";

const subscribeHandler = async (email) => {
  let isSuccess = false;
  const res = await axios.post("https://frifty-backend.herokuapp.com/newsletter", {
    email,
  });

  if (res.status === 201) {
    isSuccess = true;
  }
  
  return [isSuccess,res.data];
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
  const res = await axios.post("https://frifty-backend.herokuapp.com/website-queries", {
    type,
    name,
    email,
    reason,
    phoneNo,
    message,
  });
  if (res.status === 201) {
    isSuccess = true;
  }

  return isSuccess;
};

export { subscribeHandler, queryHandler };
