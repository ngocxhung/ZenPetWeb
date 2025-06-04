using ZenPetWeb.Models;
using ZenPetWeb.Data;
using Microsoft.EntityFrameworkCore;

namespace ZenPetWeb.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            // Đảm bảo database được tạo
            context.Database.Migrate();

            // Kiểm tra nếu đã có dữ liệu order thì thôi
            if (context.Orders.Any())
            {
                return;   // DB đã có dữ liệu rồi
            }

            // Nếu chưa có user nào, tạo 5 user tiếng Việt
            if (!context.Users.Any())
            {
                var users = new List<User>();

                string[] vietnameseFirstNames = {
                    "Nguyễn", "Trần", "Lê", "Phạm", "Huỳnh"
                };

                string[] vietnameseMiddleNames = {
                    "Văn", "Thị", "Hữu", "Minh", "Quang"
                };

                string[] vietnameseLastNames = {
                    "Anh", "Bình", "Châu", "Dương", "Giang"
                };

                Random rnd = new Random();

                for (int i = 1; i <= 5; i++)
                {
                    string fullName = $"{vietnameseFirstNames[rnd.Next(vietnameseFirstNames.Length)]} " +
                                      $"{vietnameseMiddleNames[rnd.Next(vietnameseMiddleNames.Length)]} " +
                                      $"{vietnameseLastNames[rnd.Next(vietnameseLastNames.Length)]}";

                    string userName = $"user{i:D3}";
                    string email = $"user{i}@example.com";
                    string phoneNumber = $"09{rnd.Next(10000000, 99999999)}";
                    string address = $"{rnd.Next(1, 200)} Đường Lê Lợi, Quận 1, TP.HCM";

                    users.Add(new User
                    {
                        UserName = userName,
                        FullName = fullName,
                        Password = "password", // Chỉ mẫu, không an toàn
                        Email = email,
                        PhoneNumber = phoneNumber,
                        Address = address,
                        Role = "User",
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    });
                }

                context.Users.AddRange(users);
                context.SaveChanges();
            }

            var usersFromDb = context.Users.ToList();

            var orders = new List<Order>();
            Random rndOrder = new Random();

            // Chọn ngẫu nhiên 5 user khác nhau
            var randomUsers = usersFromDb.OrderBy(x => rndOrder.Next()).Take(5).ToList();

            foreach (var user in randomUsers)
            {
                orders.Add(new Order
                {
                    UserId = user.UserId,
                    TotalAmount = rndOrder.Next(50, 500), // Tổng tiền ngẫu nhiên từ 50 đến 500
                    Status = rndOrder.Next(0, 2) == 0 ? "Đang xử lý" : "Hoàn thành",
                    PaymentMethod = rndOrder.Next(0, 2) == 0 ? "Thẻ tín dụng" : "Tiền mặt",
                    ShippingAddress = user.Address,
                    Note = rndOrder.Next(0, 2) == 0 ? "Giao hàng bình thường" : "Giao hàng trong ngày",
                    OrderDate = DateTime.UtcNow.AddDays(-rndOrder.Next(0, 30))
                });
            }

            context.Orders.AddRange(orders);
            context.SaveChanges();
        }
    }
}