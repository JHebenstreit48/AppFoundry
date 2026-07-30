import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SigningAndRun = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Xcode/SigningAndRun';

  return (
    <>
      <PageLayout>        <PageTitle title="Signing & Run (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SigningAndRun;
