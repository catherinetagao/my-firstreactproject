import ImageViewer from "./components/ImageViewer";
import MyButton from "./components/MyButton";

function App({ content, content2 }) {
  return (
    <>
      <ImageViewer />

      <MyButton
        className={"btn btn-primary btn-md w-full"}
        btnName={"Submit"}
      />
      <MyButton
        className={"btn btn-secondary btn-md w-full"}
        btnName={"Post"}
      />
    </>
  );
}

export default App;
