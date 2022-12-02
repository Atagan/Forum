export async function getAllPosts() {

    try{
        const response = await fetch('/api/Post/getPosts');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function getAllThreads() {

    try{
        const response = await fetch('/api/Post/threads',{method: 'GET'});
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function getPostsByThread(threadName) {
    try{
        const response = await fetch(`/api/Post/GetPostsByThread/${threadName}`,{method: 'GET'});
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function createPost(data) {

    const response = await fetch(`/api/Post`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}

export async function validateTitle(thread, title) {
    const response = await fetch(`/api/Post/${thread}/${title}`);
    return await response.json();
}
