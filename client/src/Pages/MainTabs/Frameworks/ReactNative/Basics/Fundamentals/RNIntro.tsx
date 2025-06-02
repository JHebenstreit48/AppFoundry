import Header from "@/Components/PageComponents/Header";
import NotesRender from "@/Components/PageComponents/Notes/NotesRender";

const RNIntro = () => {
  const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/RNIntro";

  return (
    <>
      <Header text="React Native Introduction" />
      <NotesRender filePath={markdownFilePath} />
    </>
  );
};

export default RNIntro;
