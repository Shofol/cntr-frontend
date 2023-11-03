import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

// ErrorAlert Props
interface ErrorAlertProps {
  message: string;
  level: "warning" | "error";
}

// ErrorAlert Component
const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, level }) => {
  const isWarning = level === "warning";

  return (
    <div
      className={`rounded-md p-4 ${isWarning ? "bg-yellow-50" : "bg-red-50"}`}
      data-testid="error-alert"
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {isWarning ? (
            <ExclamationTriangleIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          ) : (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <h3
            className={`text-sm font-medium ${
              isWarning ? "text-yellow-800" : "text-red-800"
            }`}
          >
            {isWarning
              ? "Attention needed"
              : "There were errors with your submission"}
          </h3>
          <div
            className={`mt-2 text-sm ${
              isWarning ? "text-yellow-700" : "text-red-700"
            }`}
          >
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
