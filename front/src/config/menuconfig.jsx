// src/config/menuConfig.js

const menuConfig = {
  member: {
    title: "회원관리",
    items: [
      { label: "회원 정보관리", path: "/admin/member" },
      { label: "회원 등록", path: "/admin/member/add" },
      { label: "회원 정보수정", path: "/admin/member/update" },
      { label: "회원 삭제", path: "/admin/member/delete" },
    ],
  },
  category: {
    title: "카테고리관리",
    items: [
      { label: "카테고리 관리", path: "/admin/category/info"},
      { label: "카테고리 순위", path: "/admin/category/ranking"}
    ],
  },
  product: {
    title: "상품관리",
    items: [
      { label: "전체 상품관리", path: "/admin/products" },
      { label: "상품 정보관리", path: "/admin/productsUpdate" },
      { label: "상품 등록관리", path: "/admin/productsAdd" },
      { label: "상품 삭제관리", path: "/admin/productsDelete" },
    ],
  },
  order: {
    title: "주문관리",
    items: [
      { label: "주문리스트(전체)", path: "/admin/orders" },
      { label: "입금대기", path: "/admin/orders/waiting" },
      { label: "배송준비", path: "/admin/orders/ready" },
      { label: "배송중", path: "/admin/orders/shipping" },
      { label: "배송완료", path: "/admin/orders/done" },
      { label: "취소/교환/반품", path: "/admin/orders/cancel" },
    ],
  },
  // 필요에 따라 추가...
};

export default menuConfig;