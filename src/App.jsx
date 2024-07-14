import ImageViewer from "./components/ImageViewer";
import MyButton from "./components/MyButton";

function App({ content, content2 }) {
  return (
    <>
      <ImageViewer />

      <MyButton
        className={"btn btn-primary btn-md w-full mt-5"}
        btnName={"Submit"}
      />
      <MyButton
        className={"btn btn-secondary btn-md w-full mt-5"}
        btnName={"Post"}
      />
    </>
  );
}

export default App;
