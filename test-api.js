const WP_API_URL = 'https://weqtechnologies.com/wp-json/wp/v2';
async function testFetchAPI() {
  const res = await fetch(`${WP_API_URL}/posts?per_page=2&_embed`);
  console.log("Status:", res.status);
  const data = await res.json();
  return data;
}

testFetchAPI().then(posts => {
  console.log('Posts count:', posts.length);
  if (posts.length > 0) {
    const post = posts[0];
    console.log('Keys:', Object.keys(post));
    console.log('Title Object:', post.title);
    console.log('Excerpt Object:', Boolean(post.excerpt));
    console.log('Has embedded:', !!post._embedded);
    console.log('Featured media in embedded:', post._embedded ? !!post._embedded['wp:featuredmedia'] : false);
    if (post._embedded && post._embedded['wp:featuredmedia']) {
       console.log('Featured media [0]:', post._embedded['wp:featuredmedia'][0] ? 'exists' : 'undefined');
       console.log('Target URL:', post._embedded['wp:featuredmedia'][0]?.source_url);
    }
  }
});
