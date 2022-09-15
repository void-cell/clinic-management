import { api } from "./api";

export function getAllDoctors(filter, page, size) {
  return api
    .get(
      `/doctors?page=${page}&size=${size}&filter=${filter}`,
      filter,
      page,
      size
    )
    .then((res) => res.data);
}

export function getDoctorById(id) {
  return api.get(`/doctors/${id}`).then((res) => res.data);
}

export function updateDoctor(id, doctor) {
  return api.put(`/doctors/${id}`, doctor).then((res) => res.data);
}

export function addNewDoctor(doctor) {
  return api.post("/doctors", doctor).then((res) => res.data);
}

export function removeDoctor(id) {
  return api.delete(`/doctors/${id}`).then((res) => res.data);
}
