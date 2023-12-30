import ItemPreview from "./ItemPreview";
import ItemSolutions from "./ItemSolutions";
import { ITEM_COUNT_PER_COL } from "./constants";

function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateNumbers(seed: number, n: number, a = 1, b = 100) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = a + Math.floor(seededRandom(seed + i) * (b - a + 1));
    numbers.push(randomNumber);
  }
  return numbers;
}

export const getPreviewContent = (
  width: number,
  height: number,
  numbers: number[],
  itemHeight: number
) => {
  const previewSheetContent = (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      class="p-5 flex"
    >
      <div class="flex-col w-full ">
        {[...Array(ITEM_COUNT_PER_COL)].map((_, index) => {
          const numberA = numbers[index];
          const numberB = numbers[index + ITEM_COUNT_PER_COL];
          return (
            <ItemPreview
              id={index + 1}
              itemHeight={itemHeight}
              numberA={numberA}
              numberB={numberB}
            />
          );
        })}
      </div>
      <div class="flex-col w-full ">
        {[...Array(ITEM_COUNT_PER_COL)].map((_, index) => {
          const numberA = numbers[index + ITEM_COUNT_PER_COL * 2];
          const numberB = numbers[index + ITEM_COUNT_PER_COL * 3];
          return (
            <ItemPreview
              id={ITEM_COUNT_PER_COL + index + 1}
              itemHeight={itemHeight}
              numberA={numberA}
              numberB={numberB}
            />
          );
        })}
      </div>
    </div>
  );

  return previewSheetContent;
};

export const getSolutionContent = (
  width: number,
  height: number,
  numbers: number[],
  itemHeight: number
) => {
  const previewSheetContent = (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      class="p-5 flex"
    >
      <div class="flex-col w-full ">
        {[...Array(ITEM_COUNT_PER_COL)].map((_, index) => {
          const numberA = numbers[index];
          const numberB = numbers[index + ITEM_COUNT_PER_COL];
          return (
            <ItemSolutions
              id={index + 1}
              itemHeight={itemHeight}
              numberA={numberA}
              numberB={numberB}
            />
          );
        })}
      </div>
      <div class="flex-col w-full ">
        {[...Array(ITEM_COUNT_PER_COL)].map((_, index) => {
          const numberA = numbers[index + ITEM_COUNT_PER_COL * 2];
          const numberB = numbers[index + ITEM_COUNT_PER_COL * 3];
          return (
            <ItemSolutions
              id={ITEM_COUNT_PER_COL + index + 1}
              itemHeight={itemHeight}
              numberA={numberA}
              numberB={numberB}
            />
          );
        })}
      </div>
    </div>
  );

  return previewSheetContent;
};
