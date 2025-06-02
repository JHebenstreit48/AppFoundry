import Header from "@/Components/Shared/Header";
import NotesRender from "@/Components/PageComponents/Notes/NotesRender";

const RNIntro = () => {
  const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Introduction";

  return (
    <>
      <Header text="Introduction" />
      <NotesRender filePath={markdownFilePath} />
    </>
  );
};

export default RNIntro;
