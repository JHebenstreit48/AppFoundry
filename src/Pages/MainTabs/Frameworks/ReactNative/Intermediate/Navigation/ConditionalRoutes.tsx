import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConditionalRoutes = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Navigation/ConditionalRoutes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Conditional Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConditionalRoutes;