namespace ForumAPI.Model
{
    public class Post
    {
        public string Id { get; set; }
        public string hilo { get; set; }
        public string Title { get; set; }
        public string Tag { get; set; }
        public string Body { get; set; }

        public Post(string id, string hilo, string title, string tag, string body)
        {
            Id = id;
            this.hilo = hilo;
            Title = title;
            Tag = tag;
            Body = body;
        }
    }
}
