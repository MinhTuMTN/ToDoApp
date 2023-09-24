import { del, get, post, put } from "./AxiosInstance";

export const getAllToDo = () => {
  return get("/ToDo", {}, {});
};

export const editToDo = (id, newToDo) => {
  return put(`/ToDo/${id}`, newToDo, {});
};

export const deleteToDo = (id) => {
  return del(`/ToDo/${id}`, {}, {});
};

export const addToDo = (newToDo) => {
  return post("/ToDo", newToDo, {});
};
