import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNStructure = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Structure';

  return (
    <>
      <PageLayout>
        <Header text="Structure" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNStructure;