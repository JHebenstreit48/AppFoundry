import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNComponentBuiltIn = () => {
    const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/ComponentsNotes/BuiltIn";

    return (
        <>
            <Header text="Built-In" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RNComponentBuiltIn;
