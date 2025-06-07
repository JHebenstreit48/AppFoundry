import Header from "@/Components/Shared/Header";
import NotesRender from "@/Components/PageComponents/Notes/NotesRender";

const RNBasicsResources = () => {
  const markdownFilePath = "ResourcesNotes/Frameworks/ReactNative/Basics";

  return (
    <>
      <Header text="Basics" />
      <NotesRender filePath={markdownFilePath} />
    </>
  );
};

export default RNBasicsResources;
