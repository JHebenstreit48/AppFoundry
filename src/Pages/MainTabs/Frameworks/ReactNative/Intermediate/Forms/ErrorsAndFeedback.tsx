import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ErrorsAndFeedback = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/ErrorsAndFeedback';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Error Messages & Feedback" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorsAndFeedback;