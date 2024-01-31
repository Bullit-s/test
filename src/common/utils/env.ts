import { unreachableError } from "@/common/utils/exceptions";

type EnvNames = "apiUrl";

export const getEnv = (name: EnvNames) => {
  switch (name) {
    case "apiUrl": {
      return process.env.NEXT_PUBLIC_API_URL_V1;
    }
    default: {
      unreachableError(name);
    }
  }
};
