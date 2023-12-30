import { createContext, createSignal, JSX } from "solid-js";

type ContextValue = {
  value: () => number;
  setValue: (val: number) => void;
};

export const IdContext = createContext<ContextValue>({
  value: () => 1,
  setValue: () => {},
});

type IdProviderProps = {
  children?: JSX.Element;
};

export function IdProvider(props: IdProviderProps) {
  const [value, setValue] = createSignal(0);

  const contextValue: ContextValue = {
    value,
    setValue,
  };

  return (
    <IdContext.Provider value={contextValue}>
      {props.children}
    </IdContext.Provider>
  );
}
