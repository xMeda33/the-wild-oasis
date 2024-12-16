import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "../../ui/showToast.js";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      showToast("success", "Setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => showToast("error", err.message),
  });

  return { isUpdating, updateSetting };
}
