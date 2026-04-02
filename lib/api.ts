const WP_API_URL = 'https://weqtechnologies.com/wp-json/wp/v2';

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const defaultOptions: RequestInit = {
    next: { revalidate: 3600 }, // Enable Incremental Static Regeneration (1 hour)
    headers: {}
  };
  const mergedOptions = { ...defaultOptions, ...options };
  try {
    const url = `${WP_API_URL}${endpoint}`;
    
    const res = await fetch(url, mergedOptions);
    
    if (!res.ok) {
      console.error(`[API] FAILED to fetch ${endpoint}. Status: ${res.status}`);
      return { data: null, totalPages: 0, totalPosts: 0 };
    }
    
    const data = await res.json();
    const totalPosts = parseInt(res.headers.get('x-wp-total') || '0');
    const totalPages = parseInt(res.headers.get('x-wp-totalpages') || '0');

    return { data, totalPages, totalPosts };
  } catch (error) {
    console.error(`[API] EXCEPTION during fetch for ${endpoint}:`, error);
    return { data: null, totalPages: 0, totalPosts: 0 };
  }
}

export async function getPageBySlug(slug: string) {
  const { data } = await fetchAPI(`/pages?slug=${slug}&_embed`);
  return data?.[0] || null;
}

export async function getPages(limit = 100) {
  const { data } = await fetchAPI(`/pages?per_page=${limit}`);
  return data;
}

export async function getPosts(limit = 10, page = 1) {
  return fetchAPI(`/posts?per_page=${limit}&page=${page}&_embed`);
}

export async function getPostBySlug(slug: string) {
  const { data } = await fetchAPI(`/posts?slug=${slug}&_embed`);
  return data?.[0] || null;
}

export async function getCustomPosts(postType: string, limit = 100) {
  const { data } = await fetchAPI(`/${postType}?per_page=${limit}&_embed`);
  return data;
}

export async function getCustomPostBySlug(postType: string, slug: string) {
  const { data } = await fetchAPI(`/${postType}?slug=${slug}&_embed`);
  return data?.[0] || null;
}
