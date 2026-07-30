import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RunningApps = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/ReactNativeCLI/RunningApps';

  return (
    <>
      <PageLayout>        <PageTitle title="Running Apps" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RunningApps;
