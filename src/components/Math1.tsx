import { Component, JSX, createEffect, useContext } from "solid-js";
import Preview from "./Math/Preview";
import Export from "./Math/Export";
import jsPDF from "jspdf";

import {
  GENERATED_NUMBERS,
  ITEM_COUNT_PER_COL,
  MAX,
  MIN,
} from "./Math/constants";
import {
  generateNumbers,
  getPreviewContent,
  getSolutionContent,
} from "./Math/utils";
import Solutions from "./Math/Solutions";
import { IdContext } from "./IdContext";

export const generateSheetContent = (
  width: number,
  height: number,
  id: number
) => {
  console.log("generateSheetContent", id);
  const itemHeight = Math.floor((height - 40) / ITEM_COUNT_PER_COL);
  const numbers = generateNumbers(id, GENERATED_NUMBERS, MIN, MAX);

  const previewSheetContent = getPreviewContent(
    width,
    height,
    numbers,
    itemHeight
  );

  const solutionsSheetContent = getSolutionContent(
    width,
    height,
    numbers,
    itemHeight
  );

  return {
    previewSheetContent,
    solutionsSheetContent,
  };
};

const Math1: Component = () => {
  const { value } = useContext(IdContext);

  var doc = new jsPDF("p", "pt", "a4");

  var width = doc.internal.pageSize.getWidth();
  var height = doc.internal.pageSize.getHeight() - 1;

  const { previewSheetContent, solutionsSheetContent } = generateSheetContent(
    width,
    height,
    value()
  );

  const exportPreviewCallback = () => {
    if (Boolean(previewSheetContent)) {
      doc.html(previewSheetContent as HTMLElement, {
        async callback(doc) {
          await doc.save("questions");
        },
      });
    }
  };
  const exportSolutionsCallback = () => {
    if (solutionsSheetContent) {
      doc.html(solutionsSheetContent as HTMLElement, {
        async callback(doc) {
          await doc.save("solutions");
        },
      });
    }
  };

  return (
    <div class="p-10 flex flex-col gap-4 ">
      <Preview>{previewSheetContent}</Preview>
      <Export callback={exportPreviewCallback} />
      <Solutions>{solutionsSheetContent}</Solutions>
      <Export callback={exportSolutionsCallback} />
    </div>
  );
};

export default Math1;
