import { Notification as NotificationType } from "@/stores/notifications";
import {
  CheckCircledIcon,
  Cross1Icon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

type NotificationProps = {
  notification: NotificationType;
  onDismiss: (id: string) => void;
};

const icons = {
  success: (
    <CheckCircledIcon className="h-6 w-6 text-white" aria-hidden="true" />
  ),
  error: <CrossCircledIcon className="h-6 w-6 text-white" aria-hidden="true" />,
};

export const Notification = ({
  notification: { id, title, message, type },
  onDismiss,
}: NotificationProps) => {
  return (
    <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, type: "spring" }}
        className={`max-w-sm w-full  border border-gray-primary shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <div className="p-4" role="alert" aria-label={title}>
          <div className="flex items-start">
            <div className="flex-shrink-0 self-center">{icons[type]}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5 self-center">
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="text-sm font-normal text-white/90">{message}</p>
            </div>
            <div className="ml-4 flex-shrink-0 flex self-center">
              <button
                className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  onDismiss(id);
                }}
              >
                <span className="sr-only">Close</span>
                <Cross1Icon className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
