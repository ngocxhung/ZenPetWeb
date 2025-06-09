import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();
export function useAdmin() { return useContext(AdminContext); }

function getLocal(key, def) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : def;
}

export function AdminProvider({ children }) {
  // Danh mục mẫu
  const initialCategories = [
    { categoryId: 1, categoryName: 'Thức ăn' },
    { categoryId: 2, categoryName: 'Phụ kiện' },
    { categoryId: 3, categoryName: 'Đồ chơi' },
    { categoryId: 4, categoryName: 'Chăm sóc' }
  ];

  // Dữ liệu mẫu cho sản phẩm
  const initialProducts = [
    {
      productId: 1,
      productName: 'Vòng định vị GPS ZenPETs',
      categoryId: 2,
      categoryName: 'Phụ kiện',
      price: 1500000,
      discount: 10,
      stock: 50,
      imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000',
      description: 'Vòng định vị GPS thông minh cho thú cưng với các tính năng:\n\n- Định vị GPS realtime\n- Cảnh báo vùng an toàn\n- Theo dõi sức khỏe (vận động, nhịp tim, nhiệt độ)\n- Lưu trữ lịch sử di chuyển\n- Pin lâu, chống nước\n- Kết nối app quản lý nhiều thú cưng',
      rating: 4.5
    },
    {
      productId: 2,
      productName: 'Thức ăn cho chó Royal Canin',
      categoryId: 1,
      categoryName: 'Thức ăn',
      price: 350000,
      discount: 0,
      stock: 100,
      imageUrl: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1000',
      description: 'Thức ăn cao cấp cho chó trưởng thành với các ưu điểm:\n\n- Cân bằng dinh dưỡng\n- Hỗ trợ tiêu hóa\n- Tăng cường miễn dịch\n- Làm sạch răng\n- Hương vị thơm ngon',
      rating: 4.8
    },
    {
      productId: 3,
      productName: 'Bàn chải đánh răng cho mèo',
      categoryId: 4,
      categoryName: 'Chăm sóc',
      price: 150000,
      discount: 15,
      stock: 30,
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000',
      description: 'Bàn chải đánh răng chuyên dụng cho mèo với các đặc điểm:\n\n- Thiết kế ergonomic\n- Lông bàn chải mềm mại\n- Tay cầm chống trượt\n- Kích thước phù hợp với miệng mèo\n- Dễ dàng vệ sinh',
      rating: 4.2
    },
    {
      productId: 4,
      productName: 'Chuồng vận chuyển thú cưng',
      categoryId: 2,
      categoryName: 'Phụ kiện',
      price: 850000,
      discount: 5,
      stock: 20,
      imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000',
      description: 'Chuồng vận chuyển an toàn cho thú cưng với các tính năng:\n\n- Chất liệu nhựa cao cấp\n- Thiết kế thông thoáng\n- Cửa khóa an toàn\n- Đệm lót êm ái\n- Dễ dàng vệ sinh',
      rating: 4.6
    }
  ];

  const [emails, setEmails] = useState(() => {
    try {
      const saved = localStorage.getItem('admin_emails');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('admin_orders');
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem('admin_categories');
      const parsed = saved ? JSON.parse(saved) : initialCategories;
      return Array.isArray(parsed) ? parsed : initialCategories;
    } catch {
      return initialCategories;
    }
  });

  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('admin_products');
      const parsed = saved ? JSON.parse(saved) : initialProducts;
      return Array.isArray(parsed) ? parsed : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  // Lưu vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem('admin_emails', JSON.stringify(emails));
  }, [emails]);

  useEffect(() => {
    localStorage.setItem('admin_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('admin_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('admin_products', JSON.stringify(products));
  }, [products]);

  // Email
  const addEmail = (email) => {
    setEmails(prev => [...prev, { id: Date.now(), email, createdAt: new Date().toISOString() }]);
  };

  // Đơn hàng
  const addOrder = (order) => {
    setOrders(prev => [...prev, { ...order, orderId: Date.now(), status: 'pending', orderDate: new Date().toISOString() }]);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev => prev.map(order => 
      order.orderId === orderId ? { ...order, status } : order
    ));
  };

  // Danh mục
  const addCategory = (category) => {
    setCategories(prev => [...prev, { ...category, categoryId: Date.now() }]);
  };

  const updateCategory = (categoryId, data) => {
    setCategories(prev => prev.map(cat => 
      cat.categoryId === categoryId ? { ...cat, ...data } : cat
    ));
    // Cập nhật tên danh mục trong sản phẩm
    setProducts(prev => prev.map(p => 
      p.categoryId === categoryId ? { ...p, categoryName: data.categoryName } : p
    ));
  };

  const deleteCategory = (categoryId) => {
    setCategories(prev => prev.filter(cat => cat.categoryId !== categoryId));
    // Xóa categoryId trong sản phẩm
    setProducts(prev => prev.map(p => 
      p.categoryId === categoryId ? { ...p, categoryId: null, categoryName: '' } : p
    ));
  };

  // Sản phẩm
  const addProduct = (product) => {
    const newId = Date.now();
    const cat = categories.find(c => c.categoryId === +product.categoryId);
    const newProduct = {
      ...product,
      productId: newId,
      categoryId: cat?.categoryId || null,
      categoryName: cat?.categoryName || '',
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (productId, data) => {
    setProducts(prev => prev.map(p => 
      p.productId === productId 
        ? { 
            ...p, 
            ...data,
            categoryName: categories.find(c => c.categoryId === data.categoryId)?.categoryName || p.categoryName
          } 
        : p
    ));
  };

  const deleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.productId !== productId));
  };

  return (
    <AdminContext.Provider value={{
      emails,
      addEmail,
      orders,
      addOrder,
      updateOrderStatus,
      categories,
      addCategory,
      updateCategory,
      deleteCategory,
      products,
      addProduct,
      updateProduct,
      deleteProduct
    }}>
      {children}
    </AdminContext.Provider>
  );
} 