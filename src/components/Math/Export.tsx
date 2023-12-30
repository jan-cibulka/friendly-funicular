import { Component } from "solid-js";

const Export: Component<{ callback: () => void }> = ({ callback }) => {
  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={callback}
      >
        Export to PDF
      </button>
    </div>
  );
};

export default Export;
