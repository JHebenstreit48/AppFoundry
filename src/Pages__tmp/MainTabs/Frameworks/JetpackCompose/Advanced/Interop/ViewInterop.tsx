import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ViewInterop = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Interop/ViewInterop';

  return (
    <>
      <PageLayout>        <PageTitle title="View Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ViewInterop;
