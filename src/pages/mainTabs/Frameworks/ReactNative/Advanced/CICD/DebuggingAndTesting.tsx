import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DebuggingAndTesting = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/CICD/DebuggingAndTesting';

  return (
    <>
      <PageLayout>        <PageTitle title="Debugging & Testing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DebuggingAndTesting;
