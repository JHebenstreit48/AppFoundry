import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProvidersAndPerformance = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/PropsState/Global/ProvidersAndPerformance';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Providers & Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProvidersAndPerformance;