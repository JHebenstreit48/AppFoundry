import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ViewInterop = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Interop/ViewInterop';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="View Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViewInterop;
