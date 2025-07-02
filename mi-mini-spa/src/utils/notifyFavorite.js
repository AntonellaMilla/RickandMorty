import { toast } from 'react-toastify';

export const notify = (msg, type = "success") => {
  toast[msg ? type : "error"](msg || "Error desconocido");
};
