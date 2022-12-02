using ForumAPI.Model;
using ForumAPI.Services;
using Microsoft.AspNetCore.Mvc;
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

        // GET api/<PostController>/5
        [HttpGet("{id}")]
        public ActionResult<Post> Get(string id)
        {
            Post result = _postService.Get(id);

            if (result == null)
            {
                return NotFound($"Team with ID={id} not found");
            }
            return result;
        }

        // POST api/<PostController>
        [HttpPost]
        public ActionResult<Post> Post([FromBody] Post post)
        {
            foreach (string s in strings)
            {
                if (post.Title.ToLower().Contains(s.ToLower())) {
                    return BadRequest("banned words in title");
                }
            }

            _postService.Create(post);
            return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
        }

        [HttpGet("{hilo}/{title}")]
        public ActionResult<bool> FindDuplicate(string hilo, string title)
        {
            return _postService.FindDuplicate(title, hilo);
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
