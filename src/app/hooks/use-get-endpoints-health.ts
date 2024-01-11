import axios from "axios";
import useSWR from "swr";
import { Endpoint } from "../domain/entities/endpoint";
import { REQUEST_TIMEOUT_VALUE } from "~/config/request-timeout-value";

const fetcher = async (name: string): Promise<Endpoint> => {
  const res = await axios
    .get(`https://api.factoryfour.com/${name}/health/status`)
    .then((res) => {
      return {
        name,
        ...res.data,
        status: "success",
      };
    })
    .catch((err) => {
      return {
        success: "error",
        name,
      };
    });

  return res;
};

export const useGetEndpointsHealth = (name: string) => {
  return useSWR(name, fetcher, {
    refreshInterval: REQUEST_TIMEOUT_VALUE * 1000,
  });
};
