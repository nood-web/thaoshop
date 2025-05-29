import React from "react";
import Image from "next/image";
import styles from "./maincontent.module.css";

const Maincontent = () => {
    return (  
<main className={styles.mainContent}> 
        <section className={styles.content}> 
          <h1>Hãy trải nghiệm và mua những gì bạn thích</h1>
          <p>chất lượng tốt </p><br></br>
          <div className={styles.banner}>
          <Image src="/images/banner.jpg" alt="Banner" width={1700} height={500} />
        </div>
        </section>
        
        <section id="products" className={styles.productSection}>
          <h2>Sản phẩm </h2>
          <div className={styles.productGrid}>
            {/* Dòng 1 */}
            <div className={styles.productCard}>
              <Image src="/images/mescedes c-class.jpg" alt="Product 1" width={300} height={300} />
              <h3>Mercedes C-Class</h3>
              <p className={styles.productDescription}>Xe sang trọng, thiết kế thể thao, hiệu suất vượt trội.</p>
              <p>Giá: 1.339.000.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/Mercedes A200.jpg" alt="Product 2" width={300} height={300} />
              <h3>Mercedes A200</h3>
              <p className={styles.productDescription}>Xe hatchback cao cấp, phù hợp cho gia đình và công việc.</p>
              <p>Giá: 4,330,000,000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/Mercedes-AMG G63.jpg" alt="Product 3" width={300} height={300} />
              <h3>Mercedes-AMG G63</h3>
              <p className={styles.productDescription}>Xe SUV mạnh mẽ, thiết kế đậm chất thể thao, động cơ V8.</p>
              <p>Giá: 10,800,000,000 VNĐ</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>

            {/* Dòng 2 */}
            <div className={styles.productCard}>
              <Image src="/images/Audi A4 Wagon.jpg" alt="Product 1" width={300} height={300} />
              <h3>Audi A4 Wagon</h3>
              <p className={styles.productDescription}>Xe wagon tiện dụng, thích hợp cho gia đình với nhiều không gian.</p>
              <p>Giá:1.790.000.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/audi q8.jpg" alt="Product 2" width={300} height={300} />
              <h3>Audi Q8 </h3>
              <p className={styles.productDescription}>SUV hạng sang với công nghệ tiên tiến và khả năng vận hành vượt trội.</p>
              <p>Giá: 4.200.000.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/Audi S4 Sedan.jpg" alt="Product 3" width={300} height={300} />
              <h3>Audi S4 Sedan</h3>
              <p className={styles.productDescription}>Sedan thể thao, động cơ mạnh mẽ, cảm giác lái tuyệt vời.</p>
              <p>Giá: 1,166,000,000</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>

            {/* Dòng 3 */}
            <div className={styles.productCard}>
              <Image src="/images/BMW X6.jpg" alt="Product 1" width={300} height={300} />
              <h3>BMW X6</h3>
              <p className={styles.productDescription}>SUV hạng sang với thiết kế hiện đại và khả năng vận hành linh hoạt.</p>
              <p>Giá:10,800,000,000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/BMW X4.jpg" alt="Product 2" width={300} height={300} />
              <h3>BMW X4 </h3>
              <p className={styles.productDescription}>Xe crossover thể thao, thiết kế mạnh mẽ và trang bị đầy đủ.</p>
              <p>Giá: 4.465.000.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/images/BMW Z4.jpg" alt="Product 3" width={300} height={300} />
              <h3>BMW Z4</h3>
              <p className={styles.productDescription}>Xe mui trần thể thao, động cơ mạnh mẽ, thiết kế thể thao cuốn hút.</p>
              <p>Giá: 63.700 USD</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>

            {/* Dòng 4 */}
            <div className={styles.productCard}>
              <Image src="/images/Porsche 718 Boxster.jpg" alt="Product 1" width={300} height={300} />
              <h3>Porsche 718 Boxster</h3>
              <p className={styles.productDescription}>Xe thể thao mui trần, cảm giác lái mạnh mẽ và chính xác.</p>
              <p>Giá:3.960.000.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
          </div>
        </section>
      </main> 
    )
}
      export default Maincontent;