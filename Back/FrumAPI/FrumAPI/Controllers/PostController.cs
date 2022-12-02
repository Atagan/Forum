using ForumAPI.Model;
using ForumAPI.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ForumAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;

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
            Post result= _postService.Get(id);

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
            _postService.Create(post);
            return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
        }

        [HttpGet("{hilo}/{title}")]
        public ActionResult<bool> FindDuplicate(string hilo, string title)
        {
            return _postService.FindDuplicate(title,hilo);
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
