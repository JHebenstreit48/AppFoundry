import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Permissions = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Features/Permissions';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Permissions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Permissions;