export async function getAllPosts() {

    try{
        const response = await fetch('/api/Post');
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