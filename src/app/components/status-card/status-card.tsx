import { Loader } from "../loader/loader";
import { useGetEndpointsHealth } from "./hooks/use-get-endpoints-health";

type Props = {
  name: string;
};

export const StatusCard = ({ name }: Props) => {
  const { data, isLoading } = useGetEndpointsHealth(name);

  if (!data) return null;

  const formattedTime = !isNaN(new Date(data.time).getTime())
    ? new Date(data.time).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "Outage";

  const renderStatusBadge = () => {
    const variants: Record<string, string> = {
      success: "bg-green-500",
      error: "bg-red-500",
    };

    return variants[data.status];
  };

  const statusMessage = data.status === "success" ? "Healthy" : "Error";

  return (
    <div className="border h-72 w-72 gap-3 text-center flex flex-col items-center justify-center p-4 m-4 bg-white rounded-lg shadow-lg">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="text-2xl font-bold">{name}</div>
          <div>{data.hostname}</div>
          <div className="mt-4 h-12 w-full">
            <div
              className={`flex items-center justify-center text-white capitalize font-bold rounded-sm w-full h-full ${renderStatusBadge()}`}
            >
              {statusMessage}
            </div>
          </div>
          <div className="mt-4 text-xl">{formattedTime}</div>
        </>
      )}
    </div>
  );
};
