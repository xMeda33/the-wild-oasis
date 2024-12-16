import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../ui/showToast.js";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      showToast("success", "User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => showToast("error", err.message),
  });

  return { updateUser, isUpdating };
}
