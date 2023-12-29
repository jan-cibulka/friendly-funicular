import { Component } from "solid-js";

const Item: Component<{ id: number; itemHeight: number }> = ({
  id,
  itemHeight,
}) => (
  <div
    class="w-full border-2 border-red-500"
    style={{
      height: `${itemHeight}px`,
    }}
  >
    {id}
  </div>
);

export default Item;
