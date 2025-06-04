import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const RNPropsState = () => {
    const markdownFilePath = "FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/PropsAndState";

    return (
        <>
            <Header text="Props/State" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default RNPropsState;
