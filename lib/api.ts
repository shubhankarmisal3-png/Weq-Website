const WP_API_URL = 'https://weqtechnologies.com/wp-json/wp/v2';

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const defaultOptions: RequestInit = {
    cache: 'no-store', // Disable cache temporarily to ensure fresh fetching
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };
  const mergedOptions = { ...defaultOptions, ...options };
  try {
    const url = `${WP_API_URL}${endpoint}`;
    console.log(`[API] Fetching: ${url}`);
    const res = await fetch(url, mergedOptions);
    
    if (!res.ok) {
      console.error(`[API] Error: ${res.status} ${res.statusText} for ${endpoint}`);
      return null;
    }
    
    const json = await res.json();
    if (!json) {
      console.warn(`[API] Warning: Empty JSON response for ${endpoint}`);
      return null;
    }

    return json;
  } catch (error) {
    console.error(`[API] Exception during fetch for ${endpoint}:`, error);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  const data = await fetchAPI(`/pages?slug=${slug}&_embed`);
  return data?.[0] || null;
}

export async function getPages(limit = 100) {
  return fetchAPI(`/pages?per_page=${limit}`);
}

export async function getPosts(limit = 10) {
  return fetchAPI(`/posts?per_page=${limit}&_embed`);
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(`/posts?slug=${slug}&_embed`);
  return data?.[0] || null;
}

export async function getCustomPosts(postType: string, limit = 100) {
  return fetchAPI(`/${postType}?per_page=${limit}&_embed`);
}

export async function getCustomPostBySlug(postType: string, slug: string) {
  const data = await fetchAPI(`/${postType}?slug=${slug}&_embed`);
  return data?.[0] || null;
}
