using Microsoft.VisualStudio.TestTools.UnitTesting;
using ForumAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ForumAPI.Controllers;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace ForumAPI.Services.Tests
{
    [TestClass()]
    public class PostServiceImplTests
    {
        [TestMethod()]
        public async Task ControllerGet_ReturnsNotNull()
        {
            //Arrange 
            var mockRepo = new Mock<IPostService>();
            var controller = new PostController(mockRepo.Object);
            //Act
            var result = await controller.Get();
            Console.WriteLine(result);
            //Assert
            Assert.IsNotNull(result);
        }
    }


}