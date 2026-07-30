import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomCode = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Native/CustomCode';

  return (
    <>
      <PageLayout>        <PageTitle title="Custom Code" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomCode;
