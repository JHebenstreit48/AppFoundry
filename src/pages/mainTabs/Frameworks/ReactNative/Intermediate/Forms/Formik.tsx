import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Formik = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/Formik';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Using Formik" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Formik;