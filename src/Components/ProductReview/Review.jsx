import React from 'react';
import logo from "../../assets/z6260461294475_7ef552247c80c53ebb9b621cffa245ea.jpg";

const Review = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dịch vụ tìm kiếm gia sư",
    "provider": {
      "@type": "Organization",
      "name": "Gia sư Giỏi Biên Hòa",
      "url": "https://www.giasugioibienhoa.com",
      "logo": logo,
      "sameAs": "https://www.facebook.com/profile.php?id=61572238568640" // Link đến các trang mạng xã hội nếu có
    },
    "areaServed": {
      "@type": "Place",
      "name": "Thành Phố Biên Hòa"
    },
    "description": "Trang web hỗ trợ phụ huynh tìm kiếm gia sư phù hợp cho con em mình. Chúng tôi nhận thông tin đăng ký và liên lạc qua điện thoại để điều tiết gia sư tới từng gia đình.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "10"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-815-062-700", // Số điện thoại liên hệ
      "contactType": "Customer Service",
      "areaServed": "VN",
      "availableLanguage": "Vietnamese"
    }
  };

  return (
    <div>
      <h1>Dịch vụ tìm kiếm gia sư</h1>
      <p>Chúng tôi giúp phụ huynh tìm kiếm gia sư phù hợp cho con em mình.</p>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </div>
  );
};

export default Review;