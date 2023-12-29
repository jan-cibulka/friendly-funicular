import { Component, JSX } from "solid-js";
import Preview from "./Math/Preview";
import Export from "./Math/Export";
import jsPDF from "jspdf";

const generateSheetContent = (width: number, height: number) => {
  const sheetContent = (
    <div>
      <h2>Exam Sheet Preview</h2>
    </div>
  );

  return sheetContent;
};

const Math1: Component = () => {
  var doc = new jsPDF("p", "mm", "a4");

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight();

  const examSheetContent = generateSheetContent(width, height);

  console.log(width, height);

  const exportCallback = () => {
    if (examSheetContent) {
      doc.html(examSheetContent as HTMLElement, {
        async callback(doc) {
          await doc.save("pdf_name");
        },
      });
    }
  };

  return (
    <div>
      <Preview>{examSheetContent}</Preview>
      <Export callback={exportCallback} />
    </div>
  );
};

export default Math1;
