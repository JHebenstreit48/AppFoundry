import Header from "@/Components/Shared/Header";
import NotesRender from "@/Components/PageComponents/Notes/NotesRender";

const RNSetup = () => {
  const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Setup";

  return (
    <>
      <Header text="Setup" />
      <NotesRender filePath={markdownFilePath} />
    </>
  );
};

export default RNSetup;
