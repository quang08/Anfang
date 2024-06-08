import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import NextLink from 'next/link';
import { EmailIcon, FacebookIcon } from 'react-share';

export default function ContactPage() {
  return (
    <Page title="Contact" description="Thông tin liên hệ Công ty TNHH ANFANG">
      <div className="container mx-auto p-6 text-xl">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Mã số thuế</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">0110648097</dd>
              </div>
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Địa chỉ</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">
                  Số 109 đường Nguyễn Trãi, Phường Thượng Đình, Quận Thanh Xuân, Hà Nội
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Người đại diện</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">Trần Quang Tuấn (sinh năm 1990 - Hà Nội) </dd>
              </div>
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Điện thoại</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">0888881356</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Ngày hoạt động</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">2024-03-13</dd>
              </div>
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Quản lý bởi</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">Chi cục Thuế Quận Thanh Xuân</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Loại hình DN</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">Công ty trách nhiệm hữu hạn 2 thành viên trở lên ngoài NN</dd>
              </div>
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4 sm:px-6">
                <dt className=" font-medium text-gray-500">Tình trạng</dt>
                <dd className="mt-1  text-gray-900 col-span-2 sm:mt-0">Đang hoạt động (đã được cấp GCN ĐKT)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-20">
        <NextLink href="https://www.facebook.com/anfanggroup" passHref>
          <a className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={40} round={true} />
          </a>
        </NextLink>

        <NextLink href="mailto:anfangvn@gmail.com" passHref>
          <a className="flex items-center justify-center">
            <EmailIcon size={40} round={true} />
          </a>
        </NextLink>
      </div>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
