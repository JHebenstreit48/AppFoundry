import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Permissions = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Features/Permissions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Permissions;