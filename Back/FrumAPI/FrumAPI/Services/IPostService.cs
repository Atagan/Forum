using ForumAPI.Model;
using System.Reflection.Metadata;

namespace ForumAPI.Services
{
    public interface IPostService
    {
        Post Get(String id);
        List<Post> GetAll();    
        bool FindDuplicate(string title,string hilo);
        Post Create(Post post);
        Post Update(String id, Post post);
    }
}
