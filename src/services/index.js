import axios from "axios";

export const previewAPI = (data) => {
  return axios
    .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
