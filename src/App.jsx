import Footer from "./components/Footer";
import ImageViewer from "./components/ImageViewer";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";

function App({ content, content2 }) {
  return (
    <>
      <h1>{content}</h1>
      <h2 className="text-3xl font-bold underline">{content2}</h2>
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
