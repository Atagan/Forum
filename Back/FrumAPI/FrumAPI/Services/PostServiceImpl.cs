using ForumAPI.Model;

namespace ForumAPI.Services
{
    public class PostServiceImpl : IPostService
    {
        static List<Post> posts = new List<Post>();

        public Post Create(Post post)
        {
            posts.Add(post);
            return post;
        }
        

        public Post Get(String id)
        {

            Post result = posts.Find(i => i.Id == id);
            if (result == null)
            {
                throw new NullReferenceException();
            }
            else { return result; }

        }

        public bool FindDuplicate(string title, string hilo)
        {
            Post result = posts.Find(i => (i.Title == title) && (i.hilo == hilo));
            if (result == null)
            {
                return true;
            }
            else { return false; }
        }

        public Post Update(string id, Post post)
        {
            throw new NotImplementedException();
        }

        public List<Post> GetAll()
        {
            return posts;
        }
    }
}
