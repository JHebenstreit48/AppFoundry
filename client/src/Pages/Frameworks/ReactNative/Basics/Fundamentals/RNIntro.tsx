import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNIntro = () => {
  const markdownFilePath = "/frameworks/reactnative/basics/fundamentals/rnintro"; // ✅ Logical path

  return (
    <>
      <Header text="React Native Introduction" />
      <Notes
        filePath={markdownFilePath}
        markdownContent="markdownContent"
      />
    </>
  );
};

export default RNIntro;
