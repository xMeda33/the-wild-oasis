import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins.js";
import { showToast } from "../../ui/showToast.js";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ cabin, id }) => createCabin(cabin, id),
    onSuccess: () => {
      showToast("success", "Cabin has been edited!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => showToast("error", err.message),
  });
  return { isEditing, editCabin };
}
