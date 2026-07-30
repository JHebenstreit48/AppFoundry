import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Setup = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/ReactNativeCLI/Setup';

  return (
    <>
      <PageLayout>        <PageTitle title="ReactNativeCLI: Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;
