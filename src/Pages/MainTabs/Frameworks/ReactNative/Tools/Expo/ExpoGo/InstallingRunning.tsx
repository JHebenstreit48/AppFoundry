import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallingRunning = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/ExpoGo/InstallingRunning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Installing/Running" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingRunning;
