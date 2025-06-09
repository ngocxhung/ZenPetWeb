using ZenPetWeb.Data;
using ZenPetWeb.Models;

namespace ZenPetWeb
{
    public class AddProductClass
    {
        // Thêm sản phẩm mới vào cơ sở dữ liệu
        private readonly ApplicationDbContext _context;

        public AddProductClass()
        {
        }

        public AddProductClass(ApplicationDbContext context)
        {
            _context = context;
        }
        // Thêm mới category
        public async Task AddCategoryAsync()
        {
            Category category1 = new Category
            {
                CategoryName = "Thức ăn",
                CreateAt = DateTime.UtcNow, // Thời gian tạo
                UpdateTime = DateTime.UtcNow // Thời gian cập nhật

            };
            var ListCategory = _context.Categories.ToList();
            // Kiểm tra xem danh sách danh mục có trống hay không
            if (!ListCategory.Any())
            {
                _context.Categories.Add(category1);
                await _context.SaveChangesAsync();
            }
        }
        public async Task AddProductAsync()
        {
            Product product1 = new Product
            {
                ProductName = "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
                Description = "GIẢM MÙI HÔI CHẤT THẢI: Các protein làm tăng khả năng tiêu hóa các chất dinh dưỡng, đồng thời hỗ trợ duy trì sức khỏe hệ thống tiết niệu, giảm lượng phân (và mùi hôi của khay vệ sinh) ở mèo trưởng thành.\r\nQUẢN LÝ CÂN NẶNG: Chế độ ăn kiêng với mức calo vừa phải, thích ứng với cường độ hoạt động thấp của mèo nhà, giúp giữ cân nặng ở mức lý tưởng.\r\nĐIỀU CHỈNH BÚI LÔNG: Giúp kích thích chuyển động của dạ dày, loại bỏ các sợi lông mèo nuốt vào bụng nhờ sự kết hợp của các chất xơ lên men và không lên men. \r\nThành phần\r\n\r\nThành phần: Bột gà, ngô, gạo nấu bia, gluten ngô, lúa mì, mỡ gà, gluten lúa mì, hương vị tự nhiên, gạo lứt, chất xơ đậu, trấu, bột củ cải khô, dầu thực vật, canxi sulfat, men khô chưng cất ngũ cốc, natri silico aluminate, dầu cá, chiết xuất hương thảo, được bảo quản bằng hỗn hợp tocopherols và axit xitric...\r\nHướng dẫn sử dụng\r\n\r\nCân nặng mèo\r\n\r\nHoạt động thấp\r\n\r\nHoạt động trung bình\r\n\r\nHoạt động cao\r\n\r\n6.6 lb (3 kg)\r\n\r\n3/8 Cốc (36 g)\r\n\r\n1/2 Cốc (45 g)\r\n\r\n5/8 Cốc (54 g)\r\n\r\n8.8 lb (4 kg)\r\n\r\n1/2 Cốc (45 g)\r\n\r\n5/8 Cốc (56 g)\r\n\r\n3/4 Cốc (67 g)\r\n\r\n11 lb (5 kg)\r\n\r\n5/8 Cốc (52 g)\r\n\r\n3/4 Cốc (65 g)\r\n\r\n7/8 Cốc (78 g)\r\n\r\n13 lb (6 kg)\r\n\r\n5/8 Cốc (59 g)\r\n\r\n3/4 Cốc (74 g)\r\n\r\n1 Cốc (89 g)\r\n\r\n15 lb (7 kg)\r\n\r\n3/4 Cốc (66 g)\r\n\r\n7/8 Cốc (83 g)\r\n\r\n1+1/8 Cốc (100 g)\r\n\r\n18 lb (8 kg)\r\n\r\n3/4 Cốc (73 g)\r\n\r\n1 Cốc (91 g)\r\n\r\n1+1/8 Cốc (109 g)\r\n\r\n20 lb (9 kg)\r\n\r\n7/8 Cốc (79 g)\r\n\r\n1+1/8 Cốc (99 g)\r\n\r\n1+1/4 Cốc (119 g)\r\n\r\n",
                Price = 115000,
                Stock = 100, // Số lượng hàng trong kho
                IsActive = true, // Sản phẩm đang hoạt động
                Rating = 0,
                Discount = 0,


                CategoryId = 1, // Giả sử 1 là ID của danh mục Thức ăn
                ImageUrl = "/img/thucanchomeoroyalcain.png",
                CreatedAt = DateTime.UtcNow, // Thời gian tạo
                UpdatedAt = DateTime.UtcNow // Thời gian cập nhật

            };
            var ListProduct = _context.Products.ToList();
            // Kiiêmr tra xem danh sách sản phẩm có trống hay không
            if (!ListProduct.Any())
            {
                _context.Products.Add(product1);
                await _context.SaveChangesAsync();
            }


        }
        


    }
}
