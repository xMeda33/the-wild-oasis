import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../ui/showToast.js";
import { createCabin as createCabinApi } from "../../services/apiCabins.js";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isAdding } = useMutation({
    mutationFn: createCabinApi,
    onSuccess: () => {
      showToast("success", "New cabin has been created!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => showToast("error", err.message),
  });

  return { isAdding, createCabin };
}
