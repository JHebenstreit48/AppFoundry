import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const RNBasicsResources = () => {
  const markdownFilePath = 'ResourcesNotes/Frameworks/ReactNative/Basics';

  return (
    <>
      <PageLayout>
        <Header text="Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNBasicsResources;
