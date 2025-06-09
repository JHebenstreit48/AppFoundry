import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNStyleLayout = () => {
    const markdownFilePath =
        'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/Styling/Layout';
    
    return (
        <>
        <PageLayout>
            <Header text="Layout" />
            <Notes
            filePath={markdownFilePath}
            markdownContent="markdownContent"
            />
        </PageLayout>
        </>
    );
};

export default RNStyleLayout;