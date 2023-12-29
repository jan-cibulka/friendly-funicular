import { Component, JSX } from "solid-js";
import jsPDF from "jspdf";

const Export: Component<{ callback: () => void }> = ({ callback }) => {
  return <button onClick={callback}>Export to PDF</button>;
};

export default Export;
