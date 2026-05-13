import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IOSSimulators = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Xcode/IOSSimulators';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="iOS Simulators (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOSSimulators;
