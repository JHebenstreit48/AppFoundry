import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Formik = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/Formik';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Using Formik" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Formik;