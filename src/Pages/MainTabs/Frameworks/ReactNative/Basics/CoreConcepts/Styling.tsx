import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNStyling = () => {
    const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/Styling";

    return (
        <>
            <Header text="Styling" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RNStyling;
