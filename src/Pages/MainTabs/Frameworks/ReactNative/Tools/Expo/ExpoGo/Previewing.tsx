import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Previewing = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/ExpoGo/Previewing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Previewing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Previewing;
