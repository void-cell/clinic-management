import { api } from "./api";

export function getAllAppointments(filter, page, size) {
  return api
    .get(
      `/appointments?page=${page}&size=${size}&filter=${filter.status}`,
      filter,
      page,
      size
    )
    .then((res) => res.data);
}

export function getAppointmentById(id) {
  return api.get(`/appointments/${id}`).then((res) => res.data);
}

export function updateAppointment(id, appointment) {
  return api.put(`/appointments/${id}`, appointment).then((res) => res.data);
}

export function addNewAppointment(appointment) {
  return api.post("/appointments", appointment).then((res) => res.data);
}

export function removeAppointment(id) {
  return api.delete(`/appointments/${id}`).then((res) => res.data);
}
