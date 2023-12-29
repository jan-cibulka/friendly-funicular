import { Component } from "solid-js";

const Item: Component<{ id: number; itemHeight: number }> = ({
  id,
  itemHeight,
}) => (
  <div
    class="w-full border border-red-500"
    style={{
      height: `${itemHeight}px`,
    }}
  >
    {id}
  </div>
);

export default Item;
