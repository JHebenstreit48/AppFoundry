import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNStructure = () => {
    const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Structure";

    return (
        <>
            <Header text="Structure" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RNStructure;
