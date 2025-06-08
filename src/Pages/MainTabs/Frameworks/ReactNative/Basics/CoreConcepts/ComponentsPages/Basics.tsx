import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNComponentBasics = () => {
    const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/ComponentsNotes/Basics";

    return (
        <>
            <Header text="Basics" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RNComponentBasics;
