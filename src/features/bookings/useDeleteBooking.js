import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../ui/showToast.js";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      showToast("success", "Booking successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => showToast("error", err.message),
  });

  return { isDeleting, deleteBooking };
}
