import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NativeModules = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Features/NativeModules';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Native Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NativeModules;