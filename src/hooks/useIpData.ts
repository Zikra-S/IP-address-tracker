import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchIpData } from "../api/ipify";
import { useSearch } from "./useSearch";

export function useIpData() {
  const term = useSearch((state) => state.term);

  return useQuery({
    queryKey: ["ip", term],
    queryFn: () => fetchIpData(term),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
