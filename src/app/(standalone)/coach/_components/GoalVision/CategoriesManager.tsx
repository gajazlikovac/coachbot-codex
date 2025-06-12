'use client';

import { use, useEffect, useState } from 'react';

import { Input } from '@/shared/Input';
import { SimpleRadar } from './Radar';

export const CREATE_CATEGORY_ID = 'create-category-placeholder';

export default function CategoriesManager({ categories$ }: { categories$: Promise<any[]> }) {
  const sourceCategories = use(categories$);
  const [categories, setCategories] = useState(sourceCategories);
  const [activeCategory, setActiveCategory] = useState<any>(null);

  const handleClick = (targetCategory: any) => {
    setCategories((prev) => prev.map((category) => ({ ...category, active: category.id === targetCategory.id })));
    setActiveCategory(targetCategory);
  };

  useEffect(() => {
    setCategories(
      sourceCategories.length < 10 ? [...new Set([...sourceCategories, { id: CREATE_CATEGORY_ID }])] : sourceCategories
    );
  }, [sourceCategories]);

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex max-h-[45dvh] min-h-[23rem] flex-grow flex-col p-3.5 2xl:min-h-[32rem]">
        <SimpleRadar data={[...categories]} onClick={handleClick}></SimpleRadar>
      </div>

      <Input
        labelKey="CoachDetails.Config.GoalVisionPage.CategoriesManager.topicDescriptionLable"
        id={'decription-input'}
        placeholder="Add topic description"
        className="flex-grow gap-y-2"
        type="textarea"
        initialValue={activeCategory?.description}
        inputClassName="border-storm-gray bg-transparent text-light-gray py-2.5 line-clamp-2 rounded-xl min-h-[4.5rem] text-base focus:text-main focus:border-main"
      />
    </div>
  );
}
