import ImageViewer from "./components/ImageViewer";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="w-full">
      <ImageViewer />
      <div className="divider"></div>
      <div className="w-full">
        <MyButton
          className={"btn btn-primary btn-md mt-5"}
          btnName={"Submit"}
        />
        <MyButton
          className={"btn btn-secondary btn-md mt-5"}
          btnName={"Post"}
        />
      </div>
    </div>
  );
}

export default App;
