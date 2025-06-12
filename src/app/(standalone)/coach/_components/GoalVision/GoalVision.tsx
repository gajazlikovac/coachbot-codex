import { getTranslations } from 'next-intl/server';

import { Assistant } from '@/lib/models/assistant.models';
import { Button } from '@/shared/Button';
import { categories } from './categories';
import CategoriesManager from './CategoriesManager';
import TopicCounter from './TopicCounter';

export default async function GoalVision({}: { assistant: Assistant }) {
  const t = await getTranslations();

  return (
    <section className="flex flex-grow flex-col gap-y-3">
      <h5 className="text-center font-semibold text-light-gray">
        {t('CoachDetails.Config.GoalVisionPage.description')}
      </h5>
      <div
        className={`flex flex-col gap-y-3 overflow-hidden rounded-2xl border bg-white-opacity px-3.5 py-4 ${'border-dark-aquamarine'}`}
      >
        <p className="text-center text-sm text-main">{t('CoachDetails.Config.GoalVisionPage.categoriesAreaTitile')}</p>
        <div className="flex flex-grow flex-col gap-x-1">
          <TopicCounter t={t} categories={categories} />

          <CategoriesManager categories$={Promise.resolve(categories)} />
        </div>
      </div>
      <div className="flex justify-end gap-x-5">
        <Button variant="solid" color="dark">
          <i className="cbi-undo" />
          {t('General.Instruction.resetButton')}
        </Button>

        <Button name={`categories-submit`} type="submit" variant="solid" color="light">
          <i className="cbi-archive-tick" />
          {t('General.Instruction.saveButton')}
        </Button>
      </div>
    </section>
  );
}
