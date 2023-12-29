import { Component } from "solid-js";

const Preview: Component = () => {
  // Your exam sheet content to be previewed
  const examSheetContent = (
    <div>
      {/* Render your exam sheet content */}
      <h1>Exam Sheet Preview</h1>
      {/* Add more exam content here */}
    </div>
  );

  return (
    <div id="preview-content">
      {/* Display the preview of the exam sheet */}
      {examSheetContent}
    </div>
  );
};

export default Preview;
