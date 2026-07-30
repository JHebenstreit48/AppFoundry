import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallingRunning = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Expo/ExpoGo/InstallingRunning';

  return (
    <>
      <PageLayout>        <PageTitle title="Installing/Running" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingRunning;
