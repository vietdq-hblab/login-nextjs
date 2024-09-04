import instance from "@/utils/request";

export const login = async (params: { email: string; password: string }) => {
  return await instance.post("/login", params);
};
