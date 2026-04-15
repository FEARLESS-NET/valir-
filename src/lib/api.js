const API_URL = 'https://69a6cf6e2cd1d055268ef810.mockapi.io/boots'
const API_URL_SHOES = 'https://69a6cf6e2cd1d055268ef810.mockapi.io/boots?category=shoes'
const API_URL_CHILDREN = 'https://69a6cf6e2cd1d055268ef810.mockapi.io/boots?category=children'
const API_URL_SPORTS = 'https://69a6cf6e2cd1d055268ef810.mockapi.io/boots?category=sports'
const API_URL_TEAMS = 'https://69a6cf6e2cd1d055268ef810.mockapi.io/boots?category=teams'

export async function getProducts() {
  const res = await fetch(API_URL)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()

}

export async function getShoes() {
  const res = await fetch(API_URL_SHOES)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}


export async function getChildren() {
  const res = await fetch(API_URL_CHILDREN)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()

}

export async function getSports() {
  const res = await fetch(API_URL_SPORTS)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()

}
export async function getTeams() {
  const res = await fetch(API_URL_TEAMS)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
} 

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch product')
  }
  return res.json()
}

export async function createProduct(product) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  if (!res.ok) {
    throw new Error('Failed to create product')
  }
  return res.json()
}


export async function updateProduct(id, product) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  if (!res.ok) {
    throw new Error('Failed to update product')
  }
  return res.json()
}

const WISHLIST_URL = "https://69a6cf6e2cd1d055268ef810.mockapi.io/wishlist"

export async function addToWishlist(product) {
  const res = await fetch(WISHLIST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  })
  return res.json()
}


export async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) {
    throw new Error('Failed to delete product')
  }
  return res.json()

}