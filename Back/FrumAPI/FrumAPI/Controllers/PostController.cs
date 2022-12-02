using ForumAPI.Model;
using ForumAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Microsoft.VisualBasic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;
        static string[] strings = new string[] {"Dialect",
"Differently",
"Dirty old man",
"Disabled",
"Dissenter",
"Distaff",
"Dogma",
"Doorman",
"Down's syndrome",
"Draftsman",
"Drunk",
"Duffer",
"Dummy",
"Dwarf",
"Heretic",
"Heroine",
"Hispanic",
"Homosexual",
"Hordes",
"Horseman",
"Horsemanship",
"Hottentot",
"Houseman",
"Housewife",
"Hussy",
"Huts",
"Pollyanna",
"Polo",
"Pop",
"Postman",
"Postmaster",
"Pressman",
"Primitive",
"Primitive man",
"Profoundly deaf",
"Provider",
"Sect",
"Senile",
"Senility",
"Serviceman",
"Showman",
"Sickly",
"Sightless",
"Sioux",
"Sissy",
"Sissified",
"Slave",
"Sneaky",
"Snow ball",
"Snow cone",
"Snowman",
"Sob sister",
"Soda",
"Songstress",
"Sophisticated",
"Soul food"};

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        // GET: api/<PostController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = _postService.GetAll();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        // POST api/<PostController>
        [HttpPost]
        public ActionResult<Post> Post([FromBody] Post post)
        {
            _postService.Create(post);
            return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
        }

        [HttpGet("{hilo}/{title}")]
        public ActionResult<bool> ValidateTitle(string hilo, string title)
        {
            foreach (string s in strings)
            {
                if (title.ToLower().Contains(s.ToLower()))
                {
                    return BadRequest("banned words in title");
                }
            }
            if (_postService.FindDuplicate(title, hilo))
            {
                return BadRequest("Repeated Title in this Thread");
            }
            return true;
        }

        [HttpGet("threads")]
        public ActionResult<List<String>> GetAllThreads()
        {
            return _postService.GetAllThreads();
        }



        // GET api/<PostController>/5
        [HttpGet("getPosts/{id}")]
        public ActionResult<Post> Get(string id)
        {
            Console.WriteLine(id);
            Post result = _postService.Get(id);
           
            if (result == null)
            {
                return NotFound($"Post with ID={id} not found");
            }
            return result;
        }

        [HttpGet("GetPostsByThread/{name}")]
        public ActionResult<List<Post>> GetPostsByThread(string name)
        {
            return _postService.GetPostsByThread(name);
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PostController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
