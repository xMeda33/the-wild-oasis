import { toast } from "react-toastify";

export const showToast = (type, message) => {
  if (type === "success") {
    toast.success(message, {
      autoClose: 3000, // Success duration
    });
  } else if (type === "error") {
    toast.error(message, {
      autoClose: 5000, // Error duration
    });
  }
};
