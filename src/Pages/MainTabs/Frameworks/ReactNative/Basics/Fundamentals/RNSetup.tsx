import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNSetup = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <Header text="Setup" />
        <Notes
        filePath={markdownFilePath}
         />
      </PageLayout>
    </>
  );
};

export default RNSetup;
