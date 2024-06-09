import Link from 'components/Link';
import { FacebookIcon } from 'react-share';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3 className="font-bold">Thông tin doanh nghiệp</h3>
      <p>
        <span>Email:</span> anfangvn@gmail.com
      </p>
      <p>
        <span>SĐT:</span> 0888881356
      </p>
      <p>
        <span>Địa chỉ:</span> Số 109 đường Nguyễn Trãi, Phường Thượng Đình, Quận Thanh Xuân, Hà Nội.
      </p>

      <div>
        <h4 className="font-bold mt-2">Kết nối với chúng tôi</h4>
        <Link href="https://www.facebook.com/anfanggroup">
          <FacebookIcon size={40} round={true} iconFillColor="black" bgStyle={{ fill: '#FFFFFF' }} />
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
//MST: 0110648097 | Email: anfangvn@gmail.com | Địa chỉ: Số 109 đường Nguyễn Trãi, Phường Thượng Đình, Quận Thanh Xuân, Hà Nội.
