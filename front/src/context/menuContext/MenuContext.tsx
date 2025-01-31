
import { createContext } from "react";

export const MenuContext = createContext<{
    valueData: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }> ({
    valueData: "data",
    setValue: () => {}
})
