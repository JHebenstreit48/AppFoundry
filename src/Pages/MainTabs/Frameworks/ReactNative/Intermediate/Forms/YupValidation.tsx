import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const YupValidation = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/YupValidation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Yup Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default YupValidation;