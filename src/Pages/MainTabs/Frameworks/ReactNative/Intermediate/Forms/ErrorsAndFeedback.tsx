import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ErrorsAndFeedback = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/ErrorsAndFeedback';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Error Messages & Feedback" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorsAndFeedback;