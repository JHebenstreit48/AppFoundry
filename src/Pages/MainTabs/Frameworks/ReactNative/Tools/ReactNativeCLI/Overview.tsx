import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Overview = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/ReactNativeCLI/Overview';

  return (
    <>
      <PageLayout>        <PageTitle title="ReactNativeCLI: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
