import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DetoxOverview = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/E2E/DetoxOverview';

  return (
    <>
      <PageLayout>        <PageTitle title="Detox Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DetoxOverview;
