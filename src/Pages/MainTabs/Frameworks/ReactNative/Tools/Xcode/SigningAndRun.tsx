import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SigningAndRun = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Xcode/SigningAndRun';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Signing & Run (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SigningAndRun;
