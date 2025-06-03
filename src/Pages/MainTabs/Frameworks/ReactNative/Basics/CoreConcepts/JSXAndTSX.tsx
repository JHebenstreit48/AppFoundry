import Header from "@/Components/Shared/Header";
import NotesRender from "@/Components/PageComponents/Notes/NotesRender";

const RNJSXTSX = () => {
  const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/JSXAndTSX";

  return (
    <>
      <Header text="JSX/TSX" size="md" />
      <NotesRender filePath={markdownFilePath} />
    </>
  );
};

export default RNJSXTSX;
