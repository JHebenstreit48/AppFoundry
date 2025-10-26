import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNProps = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/PropsStateEvent/Props';

  return (
    <>
      <PageLayout>
        <Header />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNProps;
