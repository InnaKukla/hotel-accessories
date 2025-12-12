import { instance } from "./instance";

export const registerUser = async (data) => {
  const { data: result } = await instance.post("auth/register", data);
  return result;
};

export const loginUser = async (data) => {
  const { data: result } = await instance.post("auth/login", data);
  return result;
};

// export const getCurrentUser = async token => {
//   try {
//     setToken(token);
//     const { data } = await instance.get('/current');
//     return data;
//   } catch (error) {
//     setToken();
//     throw error;
//   }
// };

export const updateUser = async (data) => {
  const { data: result } = await instance.put("/auth/update", data);
  return result;
};

export const getOneUser = async (id) => {
  try {
    const { data: result } = await instance.get(`/auth/user`,
      {
        params: {
        id
      }}
    );
    return result;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (id) => {
  const { data } = await instance.post("/auth/logout", id);
  return data;
};
