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

        public List<String> GetAllThreads()
        {
            List<String> result = new List<String>();
            foreach (Post post in posts)
            {
                result.Add(post.hilo);
            }
            return result.Distinct().ToList();
        }

        public List<Post> GetPostsByThread(string name)
        {
            List<Post> result = new List<Post>();
            foreach(Post post in posts)
            {
                if (post.hilo == name)
                {
                    result.Add(post);
                }
            }
            return result;
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
