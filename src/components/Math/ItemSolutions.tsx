import { Component } from "solid-js";

const ItemSolutions: Component<{
  id: number;
  itemHeight: number;
  numberA: number;
  numberB: number;
}> = ({ id, itemHeight, numberA, numberB }) => {
  return (
    <div
      class="w-full border border-red-500"
      style={{
        height: `${itemHeight}px`,
      }}
    >
      {numberA} + {numberB} = {numberA + numberB}
    </div>
  );
};

export default ItemSolutions;
