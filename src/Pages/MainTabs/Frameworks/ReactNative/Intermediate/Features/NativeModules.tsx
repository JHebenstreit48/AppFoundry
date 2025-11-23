import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NativeModules = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Features/NativeModules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Native Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NativeModules;