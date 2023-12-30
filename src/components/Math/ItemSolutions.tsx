import { Component } from "solid-js";

const ItemSolutions: Component<{
  id: number;
  itemHeight: number;
  numberA: number;
  numberB: number;
}> = ({ id, itemHeight, numberA, numberB }) => {
  const number1Array = numberA.toString().split("").reverse();
  const number2Array = numberB.toString().split("").reverse();
  const resultArray = (numberA + numberB).toString().split("").reverse();
  return (
    <div
      class="w-full grid grid-rows-5 grid-cols-3 grid-flow-row border border-black-300"
      style={{
        height: `${itemHeight}px`,
        "grid-template-columns": "60% 10% 30%",
      }}
    >
      <div id="q" class="col-span-3">
        {numberA} + {numberB} = {numberA + numberB}
      </div>

      <div
        id="progress"
        class="grid grid-rows-3 grid-cols-5 row-span-3  justify-self-center"
        style={{
          width: "max-content",
        }}
      >
        <div class="p-1" />
        <div class="p-1">{number1Array[3]}</div>
        <div class="p-1">{number1Array[2]}</div>
        <div class="p-1">{number1Array[1]}</div>
        <div class="p-1">{number1Array[0]}</div>

        <div class="p-1 border-b border-black-500" />
        <div class="p-1 border-b border-black-500">{number2Array[3]}</div>
        <div class="p-1 border-b border-black-500">{number2Array[2]}</div>
        <div class="p-1 border-b border-black-500">{number2Array[1]}</div>
        <div class="p-1 border-b border-black-500">{number2Array[0]}</div>

        <div class="p-1">{resultArray[4]}</div>
        <div class="p-1">{resultArray[3]}</div>
        <div class="p-1">{resultArray[2]}</div>
        <div class="p-1">{resultArray[1]}</div>
        <div class="p-1">{resultArray[0]}</div>
      </div>

      <div
        id="progress"
        class="grid grid-rows-3 grid-cols-5 row-span-3 justify-self-start"
        style={{
          width: "max-content",
        }}
      >
        <div class="p-1">{resultArray[4]}</div>
        <div class="p-1">{resultArray[3]}</div>
        <div class="p-1">{resultArray[2]}</div>
        <div class="p-1">{resultArray[1]}</div>
        <div class="p-1">{resultArray[0]}</div>

        <div class="p-1 border-b border-black-500">-</div>
        <div class="p-1 border-b border-black-500">{number2Array[3]}</div>
        <div class="p-1 border-b border-black-500">{number2Array[2]}</div>
        <div class="p-1 border-b border-black-500">{number2Array[1]}</div>
        <div class="p-1 border-b border-black-500">{number2Array[0]}</div>

        <div class="p-1" />
        <div class="p-1">{number1Array[3]}</div>
        <div class="p-1">{number1Array[2]}</div>
        <div class="p-1">{number1Array[1]}</div>
        <div class="p-1">{number1Array[0]}</div>
      </div>
    </div>
  );
};

export default ItemSolutions;
