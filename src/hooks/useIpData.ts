import { useQuery } from "@tanstack/react-query";
import { fetchIpData } from "../api/ipify";

export function useIpData(term = "") {
  return useQuery({
    queryKey: ["ip", term],
    queryFn: () => fetchIpData(term),
    retry: false,
  });
}
