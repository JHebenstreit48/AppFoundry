import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConditionalRoutes = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Navigation/ConditionalRoutes';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Conditional Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConditionalRoutes;