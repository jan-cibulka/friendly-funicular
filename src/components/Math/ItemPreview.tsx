import { Component } from "solid-js";

const ItemPreview: Component<{
  id: number;
  itemHeight: number;
  numberA: number;
  numberB: number;
}> = ({ id, itemHeight, numberA, numberB }) => {
  return (
    <div
      class="w-full border border-black-300"
      style={{
        height: `${itemHeight}px`,
      }}
    >
      {numberA} + {numberB} =
    </div>
  );
};

export default ItemPreview;
