import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    categoryName: '',
    description: ''
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://localhost:7001/api/Category/GetAll');
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Không thể tải danh mục. Vui lòng thử lại sau.');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        await axios.put(`https://localhost:7001/api/Category/UpdateCategory/${editingCategory.categoryId}`, formData);
        toast.success('Danh mục đã được cập nhật thành công!');
      } else {
        await axios.post('https://localhost:7001/api/Category/AddCategory', formData);
        toast.success('Danh mục mới đã được thêm thành công!');
      }
      setShowModal(false);
      setEditingCategory(null);
      setFormData({ categoryName: '', description: '' });
      fetchCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      categoryName: category.categoryName,
      description: category.description || ''
    });
    setShowModal(true);
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      try {
        await axios.delete(`https://localhost:7001/api/Category/DeleteCategory/${categoryId}`);
        toast.success('Danh mục đã được xóa thành công!');
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
        toast.error('Không thể xóa danh mục. Vui lòng thử lại sau.');
      }
    }
  };

  return (
    <div className="zenpet-admin-container" style={{ padding: '24px' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Quản lý danh mục</h1>
      <button
        onClick={() => {
          setEditingCategory(null);
          setFormData({ categoryName: '', description: '' });
          setShowModal(true);
        }}
        style={{
          background: '#e14b85',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '10px 20px',
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: 24
        }}
      >
        Thêm danh mục mới
      </button>

      {loading ? (
        <div>Đang tải danh mục...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {categories.map(category => (
            <div key={category.categoryId} style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 2px 12px #ffd6e6' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, marginBottom: 8 }}>{category.categoryName}</h3>
              <p style={{ fontSize: 14, color: '#666', margin: 0, marginBottom: 16 }}>{category.description || 'Không có mô tả'}</p>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={() => handleEdit(category)}
                  style={{
                    background: '#e14b85',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(category.categoryId)}
                  style={{
                    background: '#ff4d4d',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 16,
            padding: 24,
            width: '100%',
            maxWidth: 500,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0, marginBottom: 24 }}>
              {editingCategory ? 'Sửa danh mục' : 'Thêm danh mục mới'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Tên danh mục</label>
                <input
                  type="text"
                  name="categoryName"
                  value={formData.categoryName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    fontSize: 16
                  }}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Mô tả</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    fontSize: 16,
                    minHeight: 100
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingCategory(null);
                    setFormData({ categoryName: '', description: '' });
                  }}
                  style={{
                    background: '#f5f5f5',
                    color: '#333',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 20px',
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{
                    background: '#e14b85',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 20px',
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {editingCategory ? 'Cập nhật' : 'Thêm mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement; 