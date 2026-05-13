import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Ejecting = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/CLI/Ejecting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ejecting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Ejecting;
