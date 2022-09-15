import { api } from "./api";

export function getAllPatients(filter, page, size, sort, order) {
  return (
    api
      .get(
        `/patients?page=${page}&size=${size}&filter=${filter}&sort_by=${sort}&order_by=${order}`,
        filter,
        page,
        size,
        sort,
        order
      )
      .then((res) => res.data)
  );
}

export function getPatientById(id) {
  return api.get(`/patients/${id}`).then((res) => res.data);
}

export function updatePatient(id, patient) {
  return api.put(`/patients/${id}`, patient).then((res) => res.data);
}

export function addNewPatient(patient) {
  return api.post("/patients", patient).then((res) => res.data);
}

export function removePatient(id) {
  return api.delete(`/patients/${id}`).then((res) => res.data);
}
