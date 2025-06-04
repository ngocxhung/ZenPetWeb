namespace ZenPetWeb.Models
{
    public class CardPaymentRequest
    {
        public int OrderId { get; set; }
        public string CardNumber { get; set; } = string.Empty;
        public string CardHolder { get; set; } = string.Empty;
        public string Expiry { get; set; } = string.Empty; // MM/YY
        public string Cvv { get; set; } = string.Empty;
    }
}
