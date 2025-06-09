import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import NotesRender from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNBasicsResources = () => {
  const markdownFilePath = 'ResourcesNotes/Frameworks/ReactNative/Basics';

  return (
    <>
      <PageLayout>
        <Header text="Basics" />
        <NotesRender filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNBasicsResources;
