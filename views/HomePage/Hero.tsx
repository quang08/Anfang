import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import Image from 'next/image';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <Heading>Customize fine creativity</Heading>
        <MobileImageContainer>
          <Image src="/0.png" height={440} width={400} className="w-full flex items-center justify-center" />
        </MobileImageContainer>
        <Description>
          Xin chào, Công ty TNHH ANFANG (ANFANG GROUP) là một hệ sinh thái gồm các công ty thương mại và dự án xã hội. Chúng tôi gồm : Human
          of Hanoi (Dự án cộng đồng lưu giữ văn hóa Hà Nội) Humanoi (Creative House/Công ty sáng tạo) Lucy Bui Diamond & Jewelry (Kinh doanh
          thiết kế trang sức vàng và kim cương) Họa kể (Dự án nghệ thuật lưu giữ dữ liệu nghệ sĩ).
        </Description>
        <CustomButtonGroup>
          <NextLink href="/contact">
            <Button>
              Contact Us <span>&rarr;</span>
            </Button>
          </NextLink>
          {/* <NextLink href="#our-works" passHref>
            <Button transparent>
              OUR Works <span>&rarr;</span>
            </Button>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        {/* <HeroIllustration /> */}
        <Image src="/0.png" height={440} width={400} />
      </ImageContainer>
    </HeroWrapper>
  );
}

const MobileImageContainer = styled.div`
  display: none;

  ${media('<=desktop')} {
    display: block;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    display: none;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
