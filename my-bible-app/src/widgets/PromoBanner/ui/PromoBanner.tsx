
import styles from "./PromoBanner.module.scss";


type PromoBanner = {
  id: number,
  title: string,
  description: string
  image: string
}

const promoBannerData: PromoBanner[] = [
  {
    id: 1,
    title: "title",
    description: "description",
    image: "image"
  },
  {
    id: 2,
    title: "title",
    description: "description",
    image: "image"
  }
]
const PromoBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        {promoBannerData.map((banner) => (
          <div key={banner.id} className={styles.icon}>
            {banner.image}
            <h3 className={styles.title}>{banner.title}</h3>
            <p className={styles.description}>{banner.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromoBanner;