import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SimulatorsAndRealDevices = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/E2E/SimulatorsAndRealDevices';

  return (
    <>
      <PageLayout>        <PageTitle title="Simulators & Real Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SimulatorsAndRealDevices;
