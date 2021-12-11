import { MigrationInterface, QueryRunner } from 'typeorm';
import { PointType } from '../entity/point-type.entity';

const pointTypes = [
  {
    name_blr: 'Станції швидкісного трамваю',
    name_ru: 'Станции скоростного трамвая',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Історико-географічні райони міста',
    name_ru: 'Историко-географические районы города',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Залізничні вокзали',
    name_ru: 'Железнодорожные вокзалы',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Автовокзал',
    name_ru: 'Автовокзал',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Аеропорт',
    name_ru: 'Аеропорт',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Громадські вбиральні',
    name_ru: 'Общественные туалеты',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Міські та районні органи управління',
    name_ru: 'Городские и районные органы управления',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Заклади культури',
    name_ru: 'Учреждения культуры',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Музеї',
    name_ru: 'Музеи',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Заклади харчування',
    name_ru: 'Учреждения питания',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Горговельні заклади, супермаркети',
    name_ru: 'Торговые магазины, супермаркеты',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Місця відпочинку',
    name_ru: 'Места отдыха',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: `Об'єкти природи`,
    name_ru: 'Объекты природы',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Місця для дайвінгу',
    name_ru: 'Места для дайвинга',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Цирк',
    name_ru: 'Цирк',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Культові споруди',
    name_ru: 'Культовые сооружения',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Шахти',
    name_ru: 'Шахты',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Заводи',
    name_ru: 'Заводы',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Відвали',
    name_ru: 'Отвалы',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: `Кар'єри та провалля шахт`,
    name_ru: 'Карьеры и провалы шахт',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Готелі',
    name_ru: 'Отели',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Індустріальна спадщина',
    name_ru: 'Индустриальное наследие',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: `Об'єкти монументального мистецтва`,
    name_ru: 'Объекты монументального искусства',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: `Об'єкти історії та архітектури`,
    name_ru: 'Объекты истории и архитектуры',
    name_en: '',
    icon: null,
    sort_order: null,
  },
  {
    name_blr: 'Місця огляду панорами міста',
    name_ru: 'Места обзора панорамы города',
    name_en: '',
    icon: null,
    sort_order: null,
  },
]

export class PointType1584011318375 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const pointTypeItems = queryRunner.manager.create(PointType, pointTypes);
    await queryRunner.manager.save(pointTypeItems);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query('truncate table point_type cascade');
  }
}
