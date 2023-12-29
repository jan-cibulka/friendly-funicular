import { Component, JSX } from "solid-js";
import Preview from "./Math/Preview";
import Export from "./Math/Export";
import jsPDF from "jspdf";
import Item from "./Math/Item";
import { generateNumbers } from "./Math/additionUtils";

const NUMBER_OF_QUESTIONS = 5;

const generateSheetContent = (width: number, height: number) => {
  const itemHeight = Math.floor((height - 40) / NUMBER_OF_QUESTIONS);

  const sheetContent = (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      class="p-5 border-2 border-red-500 flex"
    >
      <div class="flex-col w-full ">
        {[...Array(NUMBER_OF_QUESTIONS)].map((_, index) => (
          <Item id={index + 1} itemHeight={itemHeight} />
        ))}
      </div>
      <div class="flex-col w-full ">
        {[...Array(NUMBER_OF_QUESTIONS)].map((_, index) => (
          <Item id={NUMBER_OF_QUESTIONS + index + 1} itemHeight={itemHeight} />
        ))}
      </div>
    </div>
  );

  return sheetContent;
};

const Math1: Component = () => {
  var doc = new jsPDF("p", "pt", "a4");

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight() - 1;

  const examSheetContent = generateSheetContent(width, height);

  console.log(width, height, examSheetContent);

  const generatedNmbers = generateNumbers(123, 10, 10, 100);
  console.log(generatedNmbers);
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
    <div class="p-10 flex flex-col gap-4 ">
      <Preview>{examSheetContent}</Preview>
      <Export callback={exportCallback} />
    </div>
  );
};

export default Math1;
