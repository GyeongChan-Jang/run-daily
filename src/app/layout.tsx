import { Metadata } from 'next'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: '런데일리',
  description: '러닝 잔디밭을 확인하세요 🌱',
  openGraph: {
    title: '런데일리',
    description: '러닝 잔디밭을 확인하세요 🌱',
    url: 'https://run-daily-eta.vercel.app/',
    siteName: '런데일리',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/4dfa57d0-0c88-46a6-a72e-e8a815343fdb',
        width: 1200,
        height: 630,
        alt: '런데일리 미리보기'
      }
    ],
    locale: 'ko_KR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '런데일리',
    description: '러닝 잔디밭을 확인하세요 🌱',
    images: ['https://github.com/user-attachments/assets/4dfa57d0-0c88-46a6-a72e-e8a815343fdb']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
