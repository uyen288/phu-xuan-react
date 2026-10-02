# phu-xuan-react

Dự án xuyên suốt học phần **Web FrontEnd nâng cao** (INT.7.18)
Trường Đại học Phú Xuân — Khoa Công nghệ thông tin

## Cài đặt và chạy

```bash
git clone https://github.com/<username>/phu-xuan-react.git
cd phu-xuan-react
npm install
npm run dev
```

Mở trình duyệt tại http://localhost:5173

## Công nghệ

- React 19 + TypeScript
- Vite
- ESLint + Prettier

## Lab 5 — Thành phần tái sử dụng

Mình chọn thành phần `HuyHieu` vì đây là mẫu phù hợp với sơ đồ quyết định trong React: prop `mau` quyết định màu sắc, còn `children` chứa nội dung thay đổi theo từng trường hợp. Cách này cho phép một component chung được dùng lại cho nhiều mục đích như "Nổi bật", "Khuyến nghị", "Di tích" mà không cần viết lại nhiều JSX tương tự.

Thành phần này đã được dùng ít nhất 2 lần trong đồ án với nội dung khác nhau:

- `Nổi bật` cho tour hot
- `Khuyến nghị` cho tour dài ngày
- `Di tích`, `Ẩm thực`, `Thiên nhiên`, `Làng nghề` cho từng loại tour

![alt text](image.png)
