import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const YupValidation = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/YupValidation';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Yup Validation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default YupValidation;