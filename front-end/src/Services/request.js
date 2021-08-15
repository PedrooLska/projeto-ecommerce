import api from "./api";

export default {
  postProduct(payload) {
    return api.post("/createProduct", payload);
  },
};
