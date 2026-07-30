import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EffectsAndCoroutines = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/StateAndSideEffects/EffectsAndCoroutines';

  return (
    <>
      <PageLayout>        <PageTitle title="Effects & Coroutines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EffectsAndCoroutines;
