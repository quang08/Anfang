import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Hero from 'views/HomePage/Hero';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>

      <WhiteBackgroundContainer>
        <Hero />

        <BasicSection
          imageUrl="/1.png"
          title="Humans Of Hanoi"
          overTitle="2014 - Present"
          titleLink="https://www.facebook.com/humansofhanoi/"
        >
          <p>
            Với sứ mệnh lưu giữ một phần lịch sử của người Hà Nội nói riêng và người Việt Nam nói chung thông qua những câu chuyện người
            thật - việc thật quanh Hà Nội. Chúng ta không thể biết 10, 20 hay 100 năm nữa người Hà Nội sẽ thay đổi như thế nào. Nhưng tới
            lúc đó, chúng ta vẫn còn những tư liệu này để cùng nhìn lại. Từ năm 2014 đến nay, chúng tôi đã thực hiện nhiều hoạt động và dự
            án lớn nhỏ, tiếp cận 15,000 lượt tham quan trực tiếp và hàng triệu lượt tiếp cận trên các nền tảng mạng xã hội.
          </p>
        </BasicSection>

        <DarkerBackgroundContainer id="our-works">
          <BasicSection
            imageUrl="/2.png"
            title="Humanoi"
            overTitle="2024 - Present"
            titleLink="https://www.facebook.com/profile.php?id=61558277421485"
            reversed
          >
            <p>
              Humanoi - “Human ơi” là một Creative House bao gồm những thành viên hoạt động lâu năm và có nhiều thành tựu trên các nền tảng
              xã hội.
            </p>
            <p>HUMANOI cung cấp nhiều dịch vụ, bao gồm:</p>
            <ul>
              <p>• PRODUCTION</p>
              <p>• TVC, Music video, Branded content YouTube preroll Ads, Promotional films, Photography & Video production.</p>
              <p>• CGI (Computer generated imagery)</p>
              <p>• POST PRODUCTION/ VFX (Editing, Colorgrading, VFX)</p>
              <p>• CREATIVE DEVELOPMENT (Creative strategy, Art direction)</p>
              <p>• STORYTELLING</p>
            </ul>
          </BasicSection>
        </DarkerBackgroundContainer>

        <BasicSection
          imageUrl="/3.png"
          title="Lucy Bui Diamond & Jewelry"
          overTitle="2021 - Present"
          titleLink="https://website.beacons.ai/lucybuidiamondjewelry/websites/live/85e44d1d-a420-4931-9bfc-d2407c3c0205"
        >
          <p>
            Lucy Bui Diamond & Jewelry thiết kế trang sức vàng & kim cương theo yêu cầu. Với nhiều năm kinh nghiệm trong thị trường kim
            cương, sứ mệnh của chúng tôi là đưa kim cương và định nghĩa đúng về kim cương đến với người dùng. Chúng tôi tự tin sẽ giúp bạn
            hiểu rõ hơn về thế giới kim cương và lựa chọn những sản phẩm tôn lên cá tính, bản sắc của mình hoặc người thương với chi phí hợp
            lý.
          </p>
        </BasicSection>

        <DarkerBackgroundContainer>
          <BasicSection imageUrl="/4.png" title="84SPACE" overTitle="2023 - Present" titleLink="https://84space.com/" reversed>
            <p>
              Cái tên 84SPACE được ghép từ 02 từ: 84 hay +84 là mã vùng điện thoại của Việt Nam và “SPACE” - trong từ Art Space (không gian
              nghệ thuật). Với sứ mệnh kết nối nghệ sĩ với cộng đồng, 84SPACE ra đời với mong muốn là nơi lưu trú dữ liệu của những nghệ sĩ
              Việt Nam, từ đó những tác phẩm ấy sẽ sống mãi với thời gian.
            </p>
          </BasicSection>
        </DarkerBackgroundContainer>
      </WhiteBackgroundContainer>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: #f6f6f8;
  padding-top: 10rem;
  padding-bottom: 10rem;

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
