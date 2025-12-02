import { FaLaptop, FaHighlighter, FaMobileAlt } from "react-icons/fa";
import styles from "./AppBenefits.module.scss";

type BenefitsItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

const benefitsData: BenefitsItem[] = [
  {
    id: 1,
    icon: <FaLaptop />,
    title: 'Используйте его везде',
    description: 'Выбирайте из более чем 2400 переводов Библии на более чем 1600 языках на вашем компьютере, телефоне или планшете, где во многих случаях также доступно прослушивание аудио Библии',
    link: 'Увидеть переводы Библии',
  },
  {
    id: 2,
    icon: <FaHighlighter />,
    title: 'Пусть это будет ваша Библия',
    description: 'Ставьте закладки и выделяйте маркером ваши любимые стихи, создавайте фото-стихи, которыми вы можете делиться, а также оставляйте общественные или личные заметки к отрывкам из Библии.',
    link: 'Создать бесплатную учетную запись',
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    title: 'Установите приложение сейчас',
    description: 'Приложение Библия является совершенно бесплатным, не содержит рекламу и встроенные покупки. Оно уже установлено на более чем половине миллиарда устройств!',
    link: 'Загрузить бесплатное приложение Библия',
  },
]

const AppBenefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {benefitsData.map((benefit) => (
          <div key={benefit.id} className={styles.icon}>
            {benefit.icon}
            <h3 className={styles.title}>{benefit.title}</h3>
            <p className={styles.description}>{benefit.description}</p>
            <p className={styles.link}>{benefit.link}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppBenefits;