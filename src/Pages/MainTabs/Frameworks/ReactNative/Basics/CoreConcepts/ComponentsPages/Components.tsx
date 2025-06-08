import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNComponents = () => {
    const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/Components";

    return (
        <>
            <Header text="Components" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RNComponents;
