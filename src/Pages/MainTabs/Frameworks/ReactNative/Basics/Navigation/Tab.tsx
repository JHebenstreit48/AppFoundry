import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Tab = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/Navigation/Tab';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Basics - Tab Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tab;