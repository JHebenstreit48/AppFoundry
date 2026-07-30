import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InputsAndFocus = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Forms/InputsAndFocus';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Handling Inputs & Focus" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InputsAndFocus;