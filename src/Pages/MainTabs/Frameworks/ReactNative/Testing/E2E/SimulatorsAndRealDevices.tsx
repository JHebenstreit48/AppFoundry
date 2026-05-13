import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SimulatorsAndRealDevices = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/E2E/SimulatorsAndRealDevices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Simulators & Real Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SimulatorsAndRealDevices;
