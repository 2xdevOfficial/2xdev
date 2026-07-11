import { projectCategories } from '../../../data/projectsContent';
import styles from './ProjectGrid.module.css';

interface ProjectFiltersProps {
  active: string;
  onSelect: (category: string) => void;
}

export function ProjectFilters({ active, onSelect }: ProjectFiltersProps) {
  return (
    <div className={styles.filters}>
      {projectCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={[styles.filterButton, category === active ? styles.filterActive : ''].join(
            ' ',
          )}
          aria-pressed={category === active}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
