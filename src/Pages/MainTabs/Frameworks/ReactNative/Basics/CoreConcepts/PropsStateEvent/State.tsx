import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const State = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/PropsStateEvent/State';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Understanding State in React Native" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default State;