import Image from "next/image";
import styles from "./chitietsanpham.module.css";
export default function Chitietsanpham() {
    return (
        <div className={styles.Chitietsanpham}>
            <div className={styles.mainContent}>
            <div className={styles.productGrid}>
            <div className={styles.productCard}>
                <Image src="/images/911 Carrera Cabriolet.jpg" alt="productCard 1" width={700} height={500} />
            </div>
            </div>
            </div>
                <div className={styles.hinhanh}></div>
                <h1>Xe 911 Carrera Cabriolet</h1>

                
                <p>48,850 tỉ VNĐ</p>
                <button className={styles.buyButton}>Mua ngay</button>
                <div className={styles.mota}></div>
                Tất cả những chiếc xe đã qua sử dụng được Porsche phê duyệt của chúng tôi phải vượt qua bài kiểm tra toàn diện <br/>
                được chứng nhận 111 điểm và bạn cũng sẽ nhận được bảo hành tối thiểu 2 năm và bảo hiểm sự cố Hỗ trợ của Porsche <br/>
                trong mức giá hiển thị được quảng cáo.<br/>
                Để sắp xếp một buổi xem cá nhân hoặc đăng ký lái thử, bạn có thể gọi điện, gửi email hoặc liên hệ trực tuyến với chúng tôi và chúng tôi sẽ sẵn lòng trợ giúp.<br/>
                Chúng tôi mở cửa từ Thứ Hai đến Thứ Sáu, 8.30-18.00 và Thứ Bảy 9.00-17.00. Để bán một chiếc Porsche như thế này, vui lòng liên hệ với nhóm của chúng tôi.<br/>

        </div>
    );
}   