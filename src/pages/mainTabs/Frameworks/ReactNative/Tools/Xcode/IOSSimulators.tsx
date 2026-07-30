import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IOSSimulators = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Tools/Xcode/IOSSimulators';

  return (
    <>
      <PageLayout>        <PageTitle title="iOS Simulators (RN)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IOSSimulators;
