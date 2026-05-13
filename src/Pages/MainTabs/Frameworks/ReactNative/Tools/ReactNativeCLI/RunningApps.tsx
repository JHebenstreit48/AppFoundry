import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RunningApps = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/ReactNativeCLI/RunningApps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Running Apps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningApps;
